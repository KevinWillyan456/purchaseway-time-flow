'use client'

import { ActivityCards } from '@/app/_components/ActivityCards'
import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Paragraph, Subtitle, Title } from '@/app/_components/Typography'
import { Button } from '@/app/_components/ui/button'
import { useRouter } from 'next/navigation'
import { use } from 'react'
import { Activity, Day, activities, days } from '../../activities/page'

interface DayPageProps {
  id: string
}

export default function DayPage({ params }: { params: Promise<DayPageProps> }) {
  const { id } = use(params)

  const router = useRouter()

  const day: Day | undefined = days.find((day) => day.id === id)
  const filteredActivities: Activity[] = activities.filter(
    (activity) => activity.type === day?.value
  )

  if (!day) {
    return (
      <Container className="animate-fade-in">
        <div className="space-y-1.5">
          <Title>Dia não encontrado</Title>
          <Subtitle>Não foi possível encontrar o dia especificado.</Subtitle>
        </div>

        <Content>
          <Button className="w-full" onClick={() => router.back()}>
            Voltar
          </Button>
        </Content>
      </Container>
    )
  }

  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>{day.label}</Title>
        <Subtitle>Atividades para o dia {day.label}</Subtitle>
      </div>

      <Content className="max-w-2xl">
        <Paragraph>
          Confira abaixo as atividades planejadas para o dia {day.label}.
        </Paragraph>
      </Content>

      <ActivityCards activities={filteredActivities} />

      <Content>
        <Button className="w-full" onClick={() => router.back()}>
          Voltar
        </Button>
      </Content>
    </Container>
  )
}
