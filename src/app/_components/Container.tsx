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
      className={`flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2 ${className}`}
      style={style}
      {...rest}
    >
      {children}
      <Tabs />
    </main>
  )
}
