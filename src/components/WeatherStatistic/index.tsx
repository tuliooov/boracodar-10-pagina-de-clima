import waterdrops from '../../assets/white-waterdrops.svg'
import shower from '../../assets/white-shower.svg'
import wind from '../../assets/white-wind.svg'

import { Container } from './styles'

const STATISTICS = {
  wind: {
    icon: wind,
    unity: 'km/h',
  },
  humidity: {
    icon: waterdrops,
    unity: '%',
  },
  rain: {
    icon: shower,
    unity: '%',
  },
} as const

export interface WeatherStatisticProps {
  type: keyof typeof STATISTICS
  value: number
}

export function WeatherStatistic({ type, value }: WeatherStatisticProps) {
  const { icon, unity } = STATISTICS[type]

  return (
    <Container>
      <img src={icon} alt="" />
      <p>{type}</p>
      <p>
        {value} <span>{unity}</span>
      </p>
    </Container>
  )
}
