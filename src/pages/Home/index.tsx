import { Container } from './styles'

import { WeatherNow } from '../../components/WeatherNow'
import { AirQuality } from '../../components/AirQuality'
import { Suntime } from '../../components/Suntime'
import { WeeklyForecast } from '../../components/WeeklyForecast'

export function Home() {
  return (
    <Container>
      <WeatherNow />
      <AirQuality />
      <Suntime />
      <WeeklyForecast />
    </Container>
  )
}
