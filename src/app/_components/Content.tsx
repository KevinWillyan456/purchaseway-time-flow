import { CSSProperties, ReactNode } from 'react'
import { cn } from '../_lib/utils'

interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

export function Content({ children, style, className, ...rest }: ContentProps) {
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-5',
        className
      )}
      style={style}
      {...rest}
    >
      {children}
    </div>
  )
}
