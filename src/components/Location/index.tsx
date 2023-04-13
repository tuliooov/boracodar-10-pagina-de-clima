import locationPin from '../../assets/location-pin.svg'
import { Container } from './styles'

export function Location() {
  return (
    <Container>
      <img src={locationPin} alt="" />
      <p>Juiz de Fora, MG</p>
    </Container>
  )
}
