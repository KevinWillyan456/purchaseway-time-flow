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
import { useDayStore } from '@/app/_stores/dayStore'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Day } from '../(public)/activities/page'

export function DaySelector({ days }: { days: Day[] }) {
  const { selectedDay, setSelectedDay } = useDayStore()
  const [open, setOpen] = useState(false)

  const handleSelectDay = (day: Day) => {
    setSelectedDay(day)
    setOpen(false)
  }

  useEffect(() => {
    if (!days.length) return

    const isDayInList = days.some((day) => day.value === selectedDay.value)
    if (!isDayInList) {
      setSelectedDay(days[0])
    }
  }, [days, selectedDay.value, setSelectedDay])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          aria-label="Selecione o dia"
          className="w-full max-w-[200px] justify-between truncate"
        >
          {days.find((day) => day.value === selectedDay.value)?.label ||
            'Sem dia'}
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
                  onSelect={() => handleSelectDay(day)}
                >
                  {day.label}
                  <CheckIcon
                    className={cn(
                      'text-foreground ml-auto',
                      selectedDay.value === day.value
                        ? 'opacity-100'
                        : 'opacity-0'
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
