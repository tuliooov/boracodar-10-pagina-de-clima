import { ReactNode } from 'react'

import { Container, ContainerProps } from './styles'

interface CardProps extends ContainerProps {
  children: ReactNode
}

export function Card({ children, ...rest }: CardProps) {
  return <Container {...rest}>{children}</Container>
}
