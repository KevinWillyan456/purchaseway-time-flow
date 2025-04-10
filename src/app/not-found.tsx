import Container from '@/app/_components/Container'
import Link from 'next/link'
import { Button } from './_components/ui/button'
import { Card, CardContent } from './_components/ui/card'

export default function NotFound() {
  return (
    <Container className="flex items-center justify-center pt-5" tabs={false}>
      <Card>
        <CardContent className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold">Opps!</h1>
          <p className="mt-4 text-sm text-gray-300">
            Você parece estar perdido. A página que você está procurando não
            existe.
          </p>
          <p className="mt-2 text-sm text-gray-300">
            Você pode voltar para a página inicial clicando no botão abaixo.
          </p>
          <Button asChild variant="default" className="mt-6 w-full" size="lg">
            <Link href="/">Voltar para a página inicial</Link>
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
