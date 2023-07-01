import { TextField, Typography } from '@mui/material'
import { Container, Content, Section } from './styles'

export function Address() {
  return (
    <Container>
      <Typography>Endereço</Typography>
      <Content>
        <Section>
          <TextField size="small" fullWidth label="CEP" />
          <TextField size="small" fullWidth label="Cidade" />
        </Section>
        <Section>
          <TextField size="small" fullWidth label="Bairro" />
          <TextField size="small" fullWidth label="Rua" />
        </Section>
        <Section>
          <TextField size="small" fullWidth label="Número" />
          <TextField size="small" fullWidth label="Complemento" />
        </Section>
      </Content>
    </Container>
  )
}
