import leaf from '../../assets/leaf.svg'
import { Container, Indexes, Infos } from './styles'

import { Card } from '../Card'
import { CardHeader } from '../CardHeader'
import { AirQualityInfo, AirQualityInfoProps } from '../AirQualityInfo'

export function AirQuality() {
  const airInfos: AirQualityInfoProps[] = [
    {
      info: 'PM2.5',
      value: 12.9,
    },
    {
      info: 'PM10',
      value: 12.9,
    },
    {
      info: 'SO2',
      value: 2.1,
    },
    {
      info: 'NO2',
      value: 1.4,
    },
    {
      info: 'O3',
      value: 21.2,
    },
    {
      info: 'CO',
      value: 0.7,
    },
  ]

  return (
    <Card gridArea="air">
      <Container>
        <CardHeader title="Air Quality" icon={<img src={leaf} alt="" />} />
        <Indexes>
          <span>Good</span>
          <span>21</span>
        </Indexes>
        <Infos>
          {airInfos.map((info) => {
            return <AirQualityInfo {...info} key={info.info} />
          })}
        </Infos>
      </Container>
    </Card>
  )
}
