'use client'

import { AddButton } from '@/app/_components/AddButton'
import { Container } from '@/app/_components/Container'
import { Content } from '@/app/_components/Content'
import { DayCards } from '@/app/_components/DayCards'
import { Paragraph, Subtitle, Title } from '@/app/_components/Typography'
import { Button } from '@/app/_components/ui/button'
import { Input } from '@/app/_components/ui/input'
import { XIcon } from 'lucide-react'
import { useState } from 'react'
import { days } from '../../activities/page'

export default function ManageMyDays() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredDays = days.filter((day) =>
    day.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

      <div className="relative w-full max-w-sm">
        <Input
          placeholder="Pesquisar dias..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-input border-2 pr-10"
          aria-label="Pesquisar atividades"
        />
        {searchTerm && (
          <Button
            className="hover:text-accent absolute top-1/2 right-2 -translate-y-1/2 transform hover:bg-transparent focus:bg-transparent active:bg-transparent"
            variant="ghost"
            onClick={() => setSearchTerm('')}
            aria-label="Limpar busca"
            size="icon"
          >
            <XIcon />
          </Button>
        )}
      </div>

      <DayCards days={filteredDays} />

      <AddButton />
    </Container>
  )
}
