import { Container } from './styles'

export interface AirQualityInfoProps {
  info: string
  value: number
}

export function AirQualityInfo({ info, value }: AirQualityInfoProps) {
  return (
    <Container>
      <span>{value}</span>
      <span>{info}</span>
    </Container>
  )
}
