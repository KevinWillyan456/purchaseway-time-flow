'use client'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
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
    <Button asChild className="bg-card m-0 block h-auto p-0">
      <Link href={url} className={cn('w-full', className)}>
        <Card className="bg-transparent">
          <CardContent className="truncate text-center">{title}</CardContent>
        </Card>
      </Link>
    </Button>
  )
}
