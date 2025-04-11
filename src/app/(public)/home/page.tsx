import { AddButton } from '@/app/_components/AddButton'
import { Container } from '@/app/_components/Container'
import { Title } from '@/app/_components/Typography'
import { Card, CardContent } from '@/app/_components/ui/card'

export default function Home() {
  return (
    <Container className="animate-fade-in">
      <Title>Olá, Visitante!</Title>
      <Card>
        <CardContent className="text-xs">Sem atividades</CardContent>
      </Card>

      <AddButton />
    </Container>
  )
}
