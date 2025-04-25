import Link from 'next/link'
import { Day } from '../(public)/activities/page'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

interface DayCardsProps {
  days: Day[]
}

export function DayCards({ days }: DayCardsProps) {
  if (days.length === 0) {
    return (
      <section className="flex justify-center">
        <Card
          className="animate-fade-in w-sm"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          <CardContent className="text-xs sm:text-sm">
            <h3 className="text-center">Sem dias personalizados</h3>
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {days.map((days, index) => (
        <Button
          asChild
          key={days.id}
          className="bg-card animate-fade-in m-0 block h-auto p-0"
          style={{
            animationDelay: `${index * 0.05 + 0.2}s`,
            animationFillMode: 'backwards'
          }}
        >
          <Link href={`/days/${days.id}`}>
            <Card className="bg-transparent">
              <CardContent className="space-y-1.5 text-xs sm:text-sm">
                <h3 className="truncate text-center">{days.label}</h3>
              </CardContent>
            </Card>
          </Link>
        </Button>
      ))}
    </section>
  )
}
