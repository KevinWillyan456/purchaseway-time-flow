import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Subtitle, Title } from '@/app/_components/Typography'
import { Option } from './_components/Option'

export default function Profile() {
  return (
    <Container className="animate-fade-in">
      <div className="space-y-1.5">
        <Title>Perfil</Title>
        <Subtitle>Escolha o que deseja</Subtitle>
      </div>

      <Content className="w-full max-w-sm">
        <Option title="Meu Perfil" url="/profile/my-profile" />
        <Option title="Gerenciar meus dias" url="/profile/manage-my-days" />
        <Option title="Termos de uso e Políticas de Privacidade" url="/legal" />
      </Content>
    </Container>
  )
}
