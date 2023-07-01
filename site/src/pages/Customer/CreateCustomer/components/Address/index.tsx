import { TextField, Typography } from '@mui/material'
import { Container, Content, Section } from './styles'

export function Address() {
  return (
    <Container>
      <Typography>Endereço</Typography>
      <Content>
        <Section>
          <TextField fullWidth label="CEP" />
          <TextField fullWidth label="Cidade" />
        </Section>
        <Section>
          <TextField fullWidth label="Bairro" />
          <TextField fullWidth label="Rua" />
        </Section>
        <Section>
          <TextField fullWidth label="Número" />
          <TextField fullWidth label="Complemento" />
        </Section>
      </Content>
    </Container>
  )
}
