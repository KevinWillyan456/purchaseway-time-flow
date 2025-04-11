import { Container } from '@/app/_components/Container'
import { Subtitle, Title } from '@/app/_components/Typography'
import { Option } from './_components/Option'

export default function Profile() {
  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>Perfil</Title>
        <Subtitle>Escolha o que deseja</Subtitle>
      </div>

      <Option title="Meu Perfil" url="/" />
      <Option title="Gerenciar meus dias" url="/" />
      <Option title="Termos de uso e Políticas de Privacidade" url="/legal" />
    </Container>
  )
}
