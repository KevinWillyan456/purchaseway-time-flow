'use client'

import { Button } from '@/app/_components/ui/button'
import { ROUTES, RouteType } from '@/app/_constants/routes'
import { cn } from '@/app/_lib/utils'
import Link from 'next/link'

interface OptionProps {
  title: string
  url?: RouteType
  className?: string
}

export function Option({ title, url = ROUTES.INDEX, className }: OptionProps) {
  return (
    <Button asChild className={cn('block w-full truncate', className)}>
      <Link href={url}>{title}</Link>
    </Button>
  )
}
