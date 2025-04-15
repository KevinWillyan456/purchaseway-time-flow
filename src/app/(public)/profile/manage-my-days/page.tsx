import { AddButton } from '@/app/_components/AddButton'
import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { DayCards } from '@/app/_components/DayCards'
import { Paragraph, Subtitle, Title } from '@/app/_components/Typography'
import { days } from '../../activities/page'

export default function ManageMyDays() {
  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>Gerenciar meus dias</Title>
        <Subtitle>Crie dias personalizados</Subtitle>
      </div>

      <Content className="max-w-2xl">
        <Paragraph>
          Com os dias é possível separar as atividades individialmente para cada
          dia, nesta página você podir criar um novo dia depois você pode
          alterar o dia na seção de atividades e preecher ele como quiser!
        </Paragraph>
      </Content>

      <DayCards days={days} />

      <AddButton />
    </Container>
  )
}
