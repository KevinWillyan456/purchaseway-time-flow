import { CSSProperties, ReactNode } from 'react'
import { Tabs } from './Tabs'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode
  style?: CSSProperties
  className?: string
  tabs?: boolean
}

export function Container({
  children,
  style,
  className,
  tabs = true,
  ...rest
}: ContainerProps) {
  return (
    <main className="shadow-bg bg-background relative mx-auto h-dvh w-full max-w-4xl bg-[url('/background.png')] bg-cover bg-center">
      <div
        className={`w-full space-y-5 overflow-y-auto p-5 pt-8 [&::-webkit-scrollbar]:hidden ${className}`}
        style={{
          height: tabs ? 'calc(100dvh - 60px)' : '100dvh',
          ...style
        }}
        {...rest}
      >
        {children}
      </div>

      {tabs && <Tabs />}
    </main>
  )
}
