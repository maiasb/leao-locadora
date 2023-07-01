import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Container, Content, Section } from './styles'

export function CNH() {
  return (
    <Container>
      <Typography>CNH</Typography>
      <Content>
        <Section>
          <TextField fullWidth size="small" label="Número de Registro CNH" />
          <FormControl fullWidth size="small">
            <InputLabel>Categoria CNH</InputLabel>
            <Select label="Categoria CNH">
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="AB">AB</MenuItem>
            </Select>
          </FormControl>
        </Section>
        <Section>
          <TextField fullWidth size="small" label="Data de Emissão" />
          <TextField fullWidth size="small" label="Data da 1 Habilitação" />
        </Section>
      </Content>
      <Button variant="contained">Cadastrar</Button>
    </Container>
  )
}
