import { ActivityCard } from '@/app/_components/ActivityCard'
import { AddButton } from '@/app/_components/AddButton'
import { Container } from '@/app/_components/Container'
import { DaySelector } from '@/app/_components/DaySelector'
import { Subtitle, Title } from '@/app/_components/Typography'

export interface Day {
  value: string
  label: string
}

export interface Activity {
  id: string
  title: string
  description: string
  date: Date
  type: Day['value']
  startTime: Date
  endTime: Date
}

const days: Day[] = [
  { value: 'default', label: 'Padrão' },
  { value: 'day-of-work', label: 'Dia de Trabalho' },
  { value: 'day-off', label: 'Dia de Folga' },
  { value: 'vacation', label: 'Férias' },
  { value: 'holiday', label: 'Feriado' }
]

const activities: Activity[] = [
  {
    id: '1',
    title: 'Projeto de Desenvolvimento',
    description: 'Desenvolvimento de um novo projeto',
    date: new Date('2025-03-01T00:00:00'),
    type: 'day-of-work',
    startTime: new Date('2025-03-01T08:00:00'),
    endTime: new Date('2025-03-01T17:00:00')
  },
  {
    id: '2',
    title: 'Passeio no parque',
    description: 'Visita ao parque com a família',
    date: new Date('2025-03-02T00:00:00'),
    type: 'day-off',
    startTime: new Date('2025-03-02T10:00:00'),
    endTime: new Date('2025-03-02T15:00:00')
  },
  {
    id: '3',
    title: 'Reunião de equipe',
    description: 'Reunião semanal com a equipe',
    date: new Date('2025-03-03T00:00:00'),
    type: 'day-of-work',
    startTime: new Date('2025-03-03T09:00:00'),
    endTime: new Date('2025-03-03T10:00:00')
  }
]

export default function Home() {
  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>Minhas Atividades</Title>
        <Subtitle>Confira sua rotina diária!</Subtitle>
      </div>

      <DaySelector days={days} />

      <ActivityCard activities={activities} />

      <AddButton />
    </Container>
  )
}
