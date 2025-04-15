'use client'

import { PlusIcon } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '../_lib/utils'
import { Button } from './ui/button'

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}
export function AddButton({ className, ...props }: AddButtonProps) {
  return (
    <Button
      size="icon"
      className={cn(
        'bg-primary absolute right-5 bottom-20 m-0 h-15 w-15 rounded-full',
        className
      )}
      {...props}
    >
      <PlusIcon className="size-6" />
      <span className="sr-only">
        Adicionar nova atividade ou novo dia persosnalizado
      </span>
    </Button>
  )
}
