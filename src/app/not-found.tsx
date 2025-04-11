import { Container } from '@/app/_components/Container'
import Link from 'next/link'
import { Button } from './_components/ui/button'
import { Card, CardContent } from './_components/ui/card'
import { ROUTES } from './_constants/routes'

export default function NotFound() {
  return (
    <Container
      className="animate-fade-in flex items-center justify-center"
      tabs={false}
      style={{
        paddingTop: '20px'
      }}
    >
      <Card className="py-6">
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
            <Link href={ROUTES.HOME}>Voltar para a página inicial</Link>
          </Button>
        </CardContent>
      </Card>
    </Container>
  )
}
