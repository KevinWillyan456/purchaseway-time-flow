import Link from 'next/link'
import { Activity } from '../(public)/activities/page'
import { ROUTES } from '../_constants/routes'
import { calculateDuration, formatTime } from '../_lib/utils'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

interface ActivityCardsProps {
  activities: Activity[]
}

export function ActivityCards({ activities }: ActivityCardsProps) {
  if (activities.length === 0) {
    return (
      <section className="flex justify-center">
        <Card
          className="animate-fade-in w-md"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          <CardContent className="text-center text-xs sm:text-sm">
            Sem atividades
          </CardContent>
        </Card>
      </section>
    )
  }

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity, index) => (
        <Button
          key={activity.id}
          asChild
          className="animate-fade-in bg-card m-0 block h-auto p-0"
          style={{
            animationDelay: `${index * 0.05 + 0.2}s`,
            animationFillMode: 'backwards'
          }}
        >
          <Link href={`${ROUTES.ACTIVITIES.ROOT}/${activity.id}`}>
            <Card className="bg-transparent">
              <CardContent className="space-y-1.5 text-xs sm:text-sm">
                <h3 className="truncate">{activity.title}</h3>
                <p>
                  {`A partir das ${formatTime(activity.startTime)} até ${formatTime(activity.endTime)}`}
                </p>
                <p>
                  {`Duração: ${calculateDuration(activity.startTime, activity.endTime)}`}
                </p>
              </CardContent>
            </Card>
          </Link>
        </Button>
      ))}
    </section>
  )
}
