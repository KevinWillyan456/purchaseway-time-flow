import { HTMLAttributes } from 'react'
import { cn } from '../_lib/utils'

export function Title({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('text-xl', className)} {...rest}>
      {children}
    </h1>
  )
}

export function Subtitle({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-lg', className)} {...rest}>
      {children}
    </h2>
  )
}

export function Paragraph({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-xs sm:text-sm [&>span]:font-bold', className)}
      {...rest}
    >
      {children}
    </p>
  )
}
