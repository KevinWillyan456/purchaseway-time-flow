'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Tabs = () => {
  const pathname = usePathname()

  const tabs = [
    { name: 'Home', href: '/' },
    { name: 'Activities', href: '/activities' },
    { name: 'Profile', href: '/profile' }
  ]

  return (
    <div>
      <div className="fixed right-0 bottom-0 left-0 z-10 flex justify-around bg-white p-2 shadow-md">
        {tabs.map((tab) => (
          <Link key={tab.href} href={tab.href}>
            <div
              style={{
                padding: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                borderBottom: pathname === tab.href ? '2px solid #000' : 'none'
              }}
            >
              {tab.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tabs
