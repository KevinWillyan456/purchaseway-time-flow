import Tabs from '@/app/_components/Tabs'
import { CSSProperties, ReactNode } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
  style?: CSSProperties
  className?: string
}

export default function Container({
  children,
  style,
  className,
  ...rest
}: ContainerProps) {
  return (
    <main
      className={`shadow-bg bg-background relative mx-auto h-dvh w-full max-w-4xl bg-[url('/background.png')] bg-cover bg-center ${className}`}
      style={style}
      {...rest}
    >
      {children}
      <Tabs />
    </main>
  )
}
