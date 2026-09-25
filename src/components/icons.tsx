import {
  Factory,
  Mountain,
  Zap,
  Route,
  LandPlot,
  Building2,
  Maximize2,
  Users,
  MapPin,
  Compass,
  type LucideProps,
} from 'lucide-react'

const strokeWidth = 1.7

export function IconFactory(props: LucideProps) {
  return <Factory strokeWidth={strokeWidth} {...props} />
}

export function IconMountain(props: LucideProps) {
  return <Mountain strokeWidth={strokeWidth} {...props} />
}

export function IconBolt(props: LucideProps) {
  return <Zap strokeWidth={strokeWidth} {...props} />
}

export function IconRoute(props: LucideProps) {
  return <Route strokeWidth={strokeWidth} {...props} />
}

export function IconLand(props: LucideProps) {
  return <LandPlot strokeWidth={strokeWidth} {...props} />
}

export function IconBuilding(props: LucideProps) {
  return <Building2 strokeWidth={strokeWidth} {...props} />
}

export function IconArea(props: LucideProps) {
  return <Maximize2 strokeWidth={strokeWidth} {...props} />
}

export function IconUsers(props: LucideProps) {
  return <Users strokeWidth={strokeWidth} {...props} />
}

export function IconMapPin(props: LucideProps) {
  return <MapPin strokeWidth={strokeWidth} {...props} />
}

export function IconCompass(props: LucideProps) {
  return <Compass strokeWidth={strokeWidth} {...props} />
}
