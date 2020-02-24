declare const module: { hot: { accept: () => void } }
declare module '*.woff'
declare module '*.woff2'
declare module '*.svg'

interface IconProps {
  color?: string
  className?: string
  size?: number
  onClick?: () => void
}

type FCProps = { className?: string }
type FC<T = {}> = React.FC<Readonly<T & FCProps>>
