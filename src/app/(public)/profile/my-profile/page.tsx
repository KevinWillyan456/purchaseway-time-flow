import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Subtitle, Title } from '@/app/_components/Typography'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/app/_components/ui/alert-dialog'
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full" size="lg" variant="destructive">
                Deletar todas as atividades
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação irá deletar todas as suas atividades. Esta ação não
                  pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Deletar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full" size="lg" variant="destructive">
                Deletar Conta
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza absoluta?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação irá deletar sua conta permanentemente e remover seus
                  dados dos nossos servidores. Esta ação não pode ser desfeita.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Deletar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Content>
      </Content>
    </Container>
  )
}
