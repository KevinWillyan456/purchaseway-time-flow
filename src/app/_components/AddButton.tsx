'use client'

import { PlusIcon } from 'lucide-react'
import { Button } from './ui/button'

export function AddButton({ className }: { className?: string }) {
  return (
    <Button
      size="icon"
      className={`bg-primary absolute right-5 bottom-20 m-0 h-15 w-15 rounded-full ${className}`}
    >
      <PlusIcon className="size-6" />
      <span className="sr-only">Adicionar nova atividade</span>
    </Button>
  )
}
