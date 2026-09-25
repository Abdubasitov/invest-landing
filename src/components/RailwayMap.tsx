import { useMemo, useRef, useState } from 'react'
import { geoMercator, geoPath, type GeoPermissibleObjects } from 'd3-geo'
import rawGeoData from '../data/centralAsiaGeo.json'
import { useLanguage } from '../i18n/LanguageContext'

interface KeyedFeature {
  type: 'Feature'
  properties: { key: string }
  geometry: GeoPermissibleObjects
}

const geoData = rawGeoData as unknown as {
  main: { type: 'FeatureCollection'; features: KeyedFeature[] }
  neighbors: { type: 'FeatureCollection'; features: KeyedFeature[] }
}

const WIDTH = 640
const HEIGHT = 460

// Explicit center/scale/translate instead of fitExtent: fitExtent against a
// bounding-box polygon is sensitive to ring winding direction in d3-geo and
// was collapsing the whole view to a few pixels. These numbers were tuned by
// projecting the corridor's corners until they fill the canvas with padding.
const MAP_CENTER: [number, number] = [73.3, 40.1]
const MAP_SCALE = 3700

type StopKey = 'china' | 'kyrgyzstan' | 'uzbekistan'

const waypoints: { key: StopKey; coord: [number, number] }[] = [
  { key: 'china', coord: [75.99, 39.47] },
  { key: 'kyrgyzstan', coord: [72.99, 40.93] },
  { key: 'uzbekistan', coord: [72.34, 40.78] },
]

const stopIndex: Record<StopKey, number> = { china: 0, kyrgyzstan: 1, uzbekistan: 2 }

// Catmull-Rom -> cubic Bezier, so the route curve passes smoothly through every waypoint.
function smoothPath(points: [number, number][]): string {
  if (points.length < 2) return ''
  if (points.length === 2) return `M${points[0][0]},${points[0][1]} L${points[1][0]},${points[1][1]}`
  let d = `M${points[0][0]},${points[0][1]}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1x = p1[0] + (p2[0] - p0[0]) / 6
    const c1y = p1[1] + (p2[1] - p0[1]) / 6
    const c2x = p2[0] - (p3[0] - p1[0]) / 6
    const c2y = p2[1] - (p3[1] - p1[1]) / 6
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]}`
  }
  return d
}

export function RailwayMap() {
  const { t } = useLanguage()
  const wrapRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [hovered, setHovered] = useState<StopKey | null>(null)
  const [tooltipXY, setTooltipXY] = useState({ x: 0, y: 0 })

  const { mainPaths, neighborPaths, routeD, points } = useMemo(() => {
    const projection = geoMercator().center(MAP_CENTER).scale(MAP_SCALE).translate([WIDTH / 2, HEIGHT / 2])
    const pathGen = geoPath(projection)
    const mainPaths = geoData.main.features.map((f) => ({
      key: f.properties.key as StopKey,
      d: pathGen(f.geometry) ?? '',
    }))
    const neighborPaths = geoData.neighbors.features.map((f) => ({
      key: f.properties.key,
      d: pathGen(f.geometry) ?? '',
    }))
    const points = waypoints.map((w) => ({ key: w.key, xy: projection(w.coord) as [number, number] }))
    const routeD = smoothPath(points.map((p) => p.xy))
    return { mainPaths, neighborPaths, routeD, points }
  }, [])

  // Anchor the tooltip to the country's own route point (converted from SVG
  // space to rendered pixel space) rather than the raw cursor position, then
  // clamp it inside the card so it never runs off the left/right edge.
  const showTooltip = (key: StopKey) => {
    setHovered(key)
    const svgRect = svgRef.current?.getBoundingClientRect()
    const wrapRect = wrapRef.current?.getBoundingClientRect()
    if (!svgRect || !wrapRect) return
    const scaleX = svgRect.width / WIDTH
    const scaleY = svgRect.height / HEIGHT
    const anchor = points.find((p) => p.key === key)?.xy ?? [WIDTH / 2, HEIGHT / 2]
    const x = svgRect.left - wrapRect.left + anchor[0] * scaleX
    const y = svgRect.top - wrapRect.top + anchor[1] * scaleY
    const half = 115
    const clampedX = Math.min(Math.max(x, half + 6), wrapRect.width - half - 6)
    setTooltipXY({ x: clampedX, y: Math.max(y, 90) })
  }

  const tooltipStop = hovered ? t.railway.stops[stopIndex[hovered]] : null
  const tooltipCountry = hovered ? t.railway.countries[stopIndex[hovered]] : null

  return (
    <div className="railway-map-wrap" ref={wrapRef}>
      <svg
        ref={svgRef}
        className="railway-map"
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${t.railway.countries.join(' – ')}: ${t.railway.title}`}
        onPointerLeave={() => setHovered(null)}
      >
        <defs>
          <marker id="route-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 10 5 0 10Z" fill="var(--blue)" />
          </marker>
          <radialGradient id="map-bg" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#1c3452" />
            <stop offset="100%" stopColor="#0f2337" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width={WIDTH} height={HEIGHT} rx="18" fill="url(#map-bg)" onPointerEnter={() => setHovered(null)} onClick={() => setHovered(null)} />

        <g className="map-neighbors">
          {neighborPaths.map((f) => (
            <path key={f.key} d={f.d} />
          ))}
        </g>

        <g className="map-main">
          {mainPaths.map((f) => (
            <path
              key={f.key}
              d={f.d}
              className={`map-country${hovered === f.key ? ' is-hovered' : ''}${f.key === 'kyrgyzstan' ? ' map-country--home' : ''}`}
              onPointerEnter={() => showTooltip(f.key)}
              onClick={() => showTooltip(f.key)}
              tabIndex={0}
              aria-label={t.railway.countries[stopIndex[f.key]]}
              onFocus={() => showTooltip(f.key)}
              onBlur={() => setHovered(null)}
            />
          ))}
        </g>

        <path className="map-route" d={routeD} markerEnd="url(#route-arrow)" />
        <path className="map-route map-route--glow" d={routeD} />

        {points.map((p, index) => (
          <g
            key={p.key}
            className={`map-point${p.key === 'kyrgyzstan' ? ' map-point--home' : ''}`}
            transform={`translate(${p.xy[0]},${p.xy[1]})`}
            onPointerEnter={() => showTooltip(p.key)}
            onClick={() => showTooltip(p.key)}
          >
            <circle className="map-point-ping" r="10" />
            <circle className="map-point-hit" r="16" />
            <circle className="map-point-dot" r="5" />
            <text className={`map-point-label${index === 0 ? ' map-point-label--start' : index === points.length - 1 ? ' map-point-label--end' : ''}`} y="-16">
              {t.railway.stops[stopIndex[p.key]].city}
            </text>
          </g>
        ))}
      </svg>

      {tooltipStop && tooltipCountry && (
        <div className="map-tooltip" style={{ left: tooltipXY.x, top: tooltipXY.y }}>
          <strong>{tooltipCountry}</strong>
          <span>{tooltipStop.city}</span>
          <p>{tooltipStop.note}</p>
        </div>
      )}

      <p className="map-hint">{t.railway.hint}</p>
    </div>
  )
}
