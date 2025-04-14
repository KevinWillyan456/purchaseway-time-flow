export const ROUTES = {
  INDEX: '/',
  HOME: '/home',
  ACTIVITIES: {
    ROOT: '/activities'
  },
  PROFILE: {
    ROOT: '/profile',
    MY_PROFILE: '/profile/my-profile'
  },
  LEGAL: '/legal'
} as const

type ExtractRouteValues<T> = T extends object
  ? T extends ReadonlyArray<unknown>
    ? never
    : { [K in keyof T]: ExtractRouteValues<T[K]> }[keyof T]
  : T

export type RouteType = ExtractRouteValues<typeof ROUTES>
