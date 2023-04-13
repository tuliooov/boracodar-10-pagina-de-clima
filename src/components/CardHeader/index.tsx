import { ReactNode } from 'react'

import { Container } from './styles'

interface CardHeaderProps {
  icon: ReactNode
  title: string
}

export function CardHeader({ icon, title }: CardHeaderProps) {
  return (
    <Container>
      {icon}
      <span>{title}</span>
    </Container>
  )
}
