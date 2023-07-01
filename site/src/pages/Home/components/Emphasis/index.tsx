import { Button, Typography } from '@mui/material'
import { Container, TitleSection } from './styles'
import carImg from '../../../../assets/img/gol.png'

export function Emphasis() {
  return (
    <Container>
      <TitleSection>
        <Typography fontSize={25}>
          Veículos com manutenções pendentes
        </Typography>
      </TitleSection>
      <img src={carImg} alt="gol"></img>
      <Button variant="contained">Verificar</Button>
    </Container>
  )
}
