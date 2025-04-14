'use client'

import { ActivityIcon, HomeIcon, User2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ROUTES } from '../_constants/routes'

export function Tabs() {
  const pathname = usePathname()

  const tabs = [
    { name: 'Home', href: ROUTES.HOME, icon: HomeIcon },
    { name: 'Activities', href: ROUTES.ACTIVITIES.ROOT, icon: ActivityIcon },
    { name: 'Profile', href: ROUTES.PROFILE.ROOT, icon: User2Icon }
  ]

  return (
    <div className="bg-primary text-foreground absolute right-0 bottom-0 left-0 z-10 flex h-15 justify-around overflow-x-auto p-2 [&::-webkit-scrollbar]:hidden">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`text-foreground hover:text-primary hover:bg-secondary flex flex-col items-center justify-center rounded-lg p-2 text-sm transition-all duration-200 ease-in-out ${
            pathname === tab.href || pathname.startsWith(`${tab.href}/`)
              ? 'text-secondary'
              : ''
          }`}
        >
          <tab.icon size={30} />
          <span className="sr-only">{tab.name}</span>
        </Link>
      ))}
    </div>
  )
}
