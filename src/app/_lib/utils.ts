import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(time: string | Date) {
  const date = new Date(time)

  if (isNaN(date.getTime())) {
    return '--:--'
  }

  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`
}

export function calculateDuration(
  startTime: string | Date,
  endTime: string | Date
) {
  const start = new Date(startTime)
  const end = new Date(endTime)

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '--:--'
  }

  const durationInMs = end.getTime() - start.getTime()
  if (durationInMs < 0) {
    return '--:--'
  }

  const durationInHours = Math.floor(durationInMs / (1000 * 60 * 60))
  const durationInMinutes = Math.floor(
    (durationInMs % (1000 * 60 * 60)) / (1000 * 60)
  )

  return `${durationInHours}h ${durationInMinutes > 0 ? `${durationInMinutes}m` : ''}`
}
