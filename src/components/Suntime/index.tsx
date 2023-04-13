import sunclock from '../../assets/sun-clock.svg'
import suntimeChartDraft from '../../assets/suntime-chart-draft.png'
import { Container } from './styles'

import { Card } from '../Card'
import { CardHeader } from '../CardHeader'

export function Suntime() {
  return (
    <Card gridArea="suntime">
      <Container>
        <CardHeader title="Suntime" icon={<img src={sunclock} alt="" />} />
        <img src={suntimeChartDraft} alt="" />
      </Container>
    </Card>
  )
}
