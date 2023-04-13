import { Container } from './styles'

interface TemperaturesProps {
  min: number
  max: number
}

export function Temperatures({ min, max }: TemperaturesProps) {
  return (
    <Container>
      {max}° <span>{min}°</span>
    </Container>
  )
}
