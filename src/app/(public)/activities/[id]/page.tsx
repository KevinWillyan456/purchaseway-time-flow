import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Paragraph, Title } from '@/app/_components/Typography'
import { Button } from '@/app/_components/ui/button'
import { ROUTES } from '@/app/_constants/routes'
import { calculateDuration, formatTime } from '@/app/_lib/utils'
import Link from 'next/link'
import { use } from 'react'
import { activities } from '../page'

interface ActivityPageProps {
  id: string
}

export default function ActivityPage({
  params
}: {
  params: Promise<ActivityPageProps>
}) {
  const { id } = use(params)

  const activity = activities.find((activity) => activity.id === id)

  if (!activity) {
    return (
      <Container className="animate-fade-in">
        <div className="space-y-1.5">
          <Title>Atividade não encontrada</Title>
        </div>

        <Content className="max-w-2xl">
          <Paragraph>
            Não conseguimos encontrar a atividade que você está procurando. Isso
            pode acontecer se a atividade foi excluída ou se o ID está
            incorreto.
          </Paragraph>
        </Content>

        <Content>
          <Button asChild className="w-full" size="lg">
            <Link href={ROUTES.ACTIVITIES.ROOT}>Voltar</Link>
          </Button>
        </Content>
      </Container>
    )
  }

  return (
    <Container className="animate-fade-in">
      <Title>{activity.title}</Title>

      <Paragraph>
        <span>Descrição: </span>
        {activity.description}
      </Paragraph>

      <div className="space-y-2">
        <Paragraph className="font-medium">Horário</Paragraph>
        <Paragraph className="text-muted-foreground">
          {`A partir das ${formatTime(activity.startTime)} até ${formatTime(activity.endTime)}`}
        </Paragraph>
      </div>

      <div className="mb-10 space-y-2">
        <Paragraph className="font-medium">Duração</Paragraph>
        <Paragraph className="text-muted-foreground">
          {`${calculateDuration(activity.startTime, activity.endTime)}`}
        </Paragraph>
      </div>

      <Content>
        <Button asChild className="w-full" size="lg">
          <Link href={ROUTES.ACTIVITIES.ROOT}>Voltar</Link>
        </Button>

        <Button className="w-full" size="lg">
          Editar atividade
        </Button>

        <Button className="w-full" size="lg" variant="destructive">
          Deletar atividade
        </Button>
      </Content>
    </Container>
  )
}
