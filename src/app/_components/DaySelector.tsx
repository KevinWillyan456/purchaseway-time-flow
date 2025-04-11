'use client'

import { Button } from '@/app/_components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from '@/app/_components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/app/_components/ui/popover'
import { cn } from '@/app/_lib/utils'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'
import { Day } from '../(public)/activities/page'

interface DaySelectorProps {
  days: Day[]
}

export function DaySelector({ days }: DaySelectorProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(days[0]?.value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Selecione o dia"
          className="w-[200px] justify-between"
        >
          {days.find((day) => day.value === value)?.label || 'Sem dia'}
          <ChevronsUpDownIcon className="shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty className="animate-fade-in">
              Nenhum dia encontrado
            </CommandEmpty>
            <CommandGroup>
              {days.map((day) => (
                <CommandItem
                  key={day.value}
                  value={day.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                  }}
                >
                  {day.label}
                  <CheckIcon
                    className={cn(
                      'text-foreground ml-auto',
                      value === day.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
