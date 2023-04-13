import { Container } from './styles'

import { Card } from '../Card'
import { WeatherForecast, WeatherForecastProps } from '../WeatherForecast'

export function WeeklyForecast() {
  const weeklyForecast: WeatherForecastProps[] = [
    {
      day: 'Tomorrow',
      weather: 'cloudy',
      minTemperature: 16,
      maxTemperature: 21,
    },
    {
      day: 'Friday',
      weather: 'sunny',
      minTemperature: 20,
      maxTemperature: 28,
    },
    {
      day: 'Saturday',
      weather: 'shower',
      minTemperature: 21,
      maxTemperature: 25,
    },
    {
      day: 'Sunday',
      weather: 'thunderstorm',
      minTemperature: 14,
      maxTemperature: 20,
    },
    {
      day: 'Monday',
      weather: 'mostlyCloudy',
      minTemperature: 24,
      maxTemperature: 18,
    },
  ]

  return (
    <Card padding="lg" gridArea="forecast">
      <Container>
        {weeklyForecast.map((forecast) => {
          return <WeatherForecast {...forecast} key={forecast.day} />
        })}
      </Container>
    </Card>
  )
}
