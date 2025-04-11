export const ROUTES = {
  INDEX: '/',
  HOME: '/home',
  ACTIVITIES: '/activities',
  PROFILE: '/profile',
  LEGAL: '/legal'
} as const

export type RouteType = (typeof ROUTES)[keyof typeof ROUTES]
