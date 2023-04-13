import { Container } from './styles'

import cloudy from '../../assets/color-cloudy.svg'
import mostlyCloudy from '../../assets/color-mostly-cloudy.svg'
import shower from '../../assets/color-shower.svg'
import sunny from '../../assets/color-sunny.svg'
import thunderstorm from '../../assets/color-thunderstorm.svg'

import { Temperatures } from '../Temperatures'

const WEATHER = {
  cloudy,
  mostlyCloudy,
  shower,
  sunny,
  thunderstorm,
} as const

export interface WeatherForecastProps {
  day: string
  weather: keyof typeof WEATHER
  minTemperature: number
  maxTemperature: number
}

export function WeatherForecast({
  day,
  weather,
  minTemperature,
  maxTemperature,
}: WeatherForecastProps) {
  return (
    <Container>
      <span>{day}</span>
      <img src={WEATHER[weather]} alt="" />
      <Temperatures min={minTemperature} max={maxTemperature} />
    </Container>
  )
}
