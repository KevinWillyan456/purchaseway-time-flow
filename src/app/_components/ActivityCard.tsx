import { Activity } from '../(public)/activities/page'
import { Card, CardContent } from './ui/card'

interface ActivityCardProps {
  activities: Activity[]
}

function formatTime(time: string | Date) {
  const date = new Date(time)

  if (isNaN(date.getTime())) {
    return '--:--'
  }

  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

function calculateDuration(startTime: string | Date, endTime: string | Date) {
  const start = new Date(startTime)
  const end = new Date(endTime)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '--:--'
  }

  const durationInMs = end.getTime() - start.getTime()
  if (durationInMs < 0) {
    return '--:--'
  }

  const durationInHours = Math.floor(durationInMs / (1000 * 60 * 60))
  const durationInMinutes = Math.floor(
    (durationInMs % (1000 * 60 * 60)) / (1000 * 60)
  )

  return `${durationInHours}h ${durationInMinutes > 0 ? `${durationInMinutes}m` : ''}`
}

export function ActivityCard({ activities }: ActivityCardProps) {
  if (activities.length === 0) {
    return (
      <Card>
        <CardContent className="text-xs">Sem atividades</CardContent>
      </Card>
    )
  }

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {activities.map((activity, index) => (
        <Card
          key={activity.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 0.05 + 0.2}s`,
            animationFillMode: 'backwards'
          }}
        >
          <CardContent className="space-y-1.5 text-xs">
            <h3>{activity.title}</h3>
            <p>
              {`A partir das ${formatTime(activity.startTime)} até ${formatTime(activity.endTime)}`}
            </p>
            <p>
              {`Duração: ${calculateDuration(activity.startTime, activity.endTime)}`}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
