import { Container, StatisticsContainer, TemperatureContainer } from './styles'

import { Card } from '../Card'
import { Location } from '../Location'
import { Temperatures } from '../Temperatures'
import { WeatherStatistic, WeatherStatisticProps } from '../WeatherStatistic'

export function WeatherNow() {
  const weatherStatistics: WeatherStatisticProps[] = [
    {
      type: 'wind',
      value: 17,
    },
    {
      type: 'humidity',
      value: 31,
    },
    {
      type: 'rain',
      value: 10,
    },
  ]

  return (
    <Card padding="sm" gridArea="now">
      <Container>
        <Location />
        <TemperatureContainer>
          <span>18</span>
          <Temperatures min={22} max={16} />
        </TemperatureContainer>
        <StatisticsContainer>
          {weatherStatistics.map((statistic) => {
            return <WeatherStatistic {...statistic} key={statistic.type} />
          })}
        </StatisticsContainer>
      </Container>
    </Card>
  )
}
