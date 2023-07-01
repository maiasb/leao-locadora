import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { Container, Content, Section } from './styles'

interface PessoalDataProps {
  name: string
  cpf: string
  birth: string
  phone: string
  isPhoneWhatsapp: boolean
  setName(name: string): void
  setCpf(cpf: string): void
  setBirth(birth: string): void
  setPhone(phone: string): void
  setIsPhoneWhatsapp(isPhoneWhatsapp: boolean): void
}

export function PessoalData({
  name,
  cpf,
  birth,
  phone,
  isPhoneWhatsapp,
  setName,
  setCpf,
  setBirth,
  setPhone,
  setIsPhoneWhatsapp,
}: PessoalDataProps) {
  return (
    <Container>
      <Typography>Dados Pessoais</Typography>
      <Content>
        <Section>
          <TextField
            size="small"
            fullWidth
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </Section>
        <Section>
          <TextField
            size="small"
            fullWidth
            label="Nascimento"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '30px',
              width: '100%',
            }}
          >
            <TextField
              size="small"
              fullWidth
              label="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPhoneWhatsapp}
                  onChange={(e) => setIsPhoneWhatsapp(e.target.checked)}
                />
              }
              label="Whatsapp?"
            />
          </Box>
        </Section>
      </Content>
    </Container>
  )
}
