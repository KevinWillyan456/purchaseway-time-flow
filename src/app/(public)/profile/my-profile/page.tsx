import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Subtitle, Title } from '@/app/_components/Typography'
import { Avatar, AvatarFallback } from '@/app/_components/ui/avatar'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { Label } from '@/app/_components/ui/label'
import { UserCircle2Icon } from 'lucide-react'

export default function MyProfile() {
  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>Meu Perfil</Title>
        <Subtitle>Personalize da forma que preferir!</Subtitle>
      </div>

      <Content className="space-y-20">
        <Content>
          <Avatar className="h-30 w-30">
            <AvatarFallback>
              <UserCircle2Icon className="size-16" />
            </AvatarFallback>
          </Avatar>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input type="text" id="name" placeholder="Seu nome aqui..." />
          </div>

          <Button className="w-full" size="lg">
            Salvar
          </Button>
        </Content>

        <Content>
          <Button className="w-full" size="lg" variant="destructive">
            Deletar todas as atividades
          </Button>

          <Button className="w-full" size="lg" variant="destructive">
            Deletar Conta
          </Button>
        </Content>
      </Content>
    </Container>
  )
}
