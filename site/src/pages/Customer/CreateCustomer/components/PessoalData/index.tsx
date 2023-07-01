import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { Container, Content, Section } from './styles'

export function PessoalData() {
  return (
    <Container>
      <Typography>Dados Pessoais</Typography>
      <Content>
        <Section>
          <TextField size="small" fullWidth label="Nome" />
          <TextField size="small" fullWidth label="CPF" />
        </Section>
        <Section>
          <TextField size="small" fullWidth label="Nascimento" />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '30px',
              width: '100%',
            }}
          >
            <TextField size="small" fullWidth label="Telefone" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Whatsapp?"
            />
          </Box>
        </Section>
      </Content>
    </Container>
  )
}
