import { HTMLAttributes } from 'react'

export function Title({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={`text-xl ${className}`} {...rest}>
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
    <h2 className={`text-lg ${className}`} {...rest}>
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
    <p className={`text-xs [&>span]:font-bold ${className}`} {...rest}>
      {children}
    </p>
  )
}
