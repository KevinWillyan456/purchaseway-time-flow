'use client'

import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { Paragraph, Title } from '@/app/_components/Typography'
import { Button } from '@/app/_components/ui/button'
import { useRouter } from 'next/navigation'

export default function Legal() {
  const router = useRouter()

  return (
    <Container className="animate-fade-in" tabs={false}>
      <Content className="max-w-2xl">
        <Title>Termos de Uso & Privacidade</Title>

        <Paragraph>
          Ao utilizar este sistema, você concorda com os termos descritos
          abaixo. Leia atentamente para compreender como seus dados serão
          utilizados e armazenados.
        </Paragraph>

        <Paragraph>
          <span>Coleta de Dados: </span>
          Este sistema solicita seu login via Google, coletando informações
          básicas como nome, e-mail e foto de perfil. Esses dados são utilizados
          exclusivamente para personalizar sua experiência dentro da plataforma.
        </Paragraph>

        <Paragraph>
          <span>Registro de Atividades: </span>
          Todas as atividades que você cadastrar serão armazenadas e associadas
          à sua conta. O administrador do sistema terá acesso a esses registros.
          Portanto, evite inserir informações sensíveis ou privadas.
        </Paragraph>

        <Paragraph>
          <span>Privacidade e Segurança: </span>
          Empregamos medidas para proteger seus dados, mas não garantimos
          proteção total contra perda, exclusão acidental ou vazamento de
          informações. O uso do sistema é de sua inteira responsabilidade, e
          recomendamos cautela ao compartilhar dados.
        </Paragraph>

        <Paragraph>
          <span>Isenção de Responsabilidade: </span>O administrador do sistema
          não se responsabiliza por danos, perdas de dados ou vazamento de
          informações que possam ocorrer. O usuário deve utilizar o serviço de
          forma consciente e estar ciente dos riscos envolvidos.
        </Paragraph>

        <Paragraph>
          <span>Uso Consciente: </span>
          Ao utilizar esta plataforma, você reconhece que os dados fornecidos
          são armazenados e acessíveis pelo administrador. Se não deseja
          compartilhar essas informações, não utilize este sistema.
        </Paragraph>

        <Button
          variant="default"
          className="w-full max-w-sm"
          onClick={() => router.back()}
        >
          Voltar
        </Button>
      </Content>
    </Container>
  )
}
