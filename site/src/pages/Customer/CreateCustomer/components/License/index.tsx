import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { Container, Content, Section } from './styles'

interface LicenseProps {
  licenseNumber: string
  licenseCategory: string
  issueDate: string
  originalIssueDate: string
  setLicenseNumber(licenseNumber: string): void
  setLicenseCategory(licenseCategory: string): void
  setIssueDate(issueDate: string): void
  setOriginalIssueDate(originalIssueDate: string): void
}

export function License({
  licenseNumber,
  licenseCategory,
  issueDate,
  originalIssueDate,
  setLicenseNumber,
  setLicenseCategory,
  setIssueDate,
  setOriginalIssueDate,
}: LicenseProps) {
  return (
    <Container>
      <Typography>CNH</Typography>
      <Content>
        <Section>
          <TextField
            fullWidth
            size="small"
            label="Número de Registro CNH"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
          <FormControl fullWidth size="small">
            <InputLabel>Categoria CNH</InputLabel>
            <Select
              label="Categoria CNH"
              value={licenseCategory}
              onChange={(e) => setLicenseCategory(e.target.value)}
            >
              <MenuItem value="B">B</MenuItem>
              <MenuItem value="C">C</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="AB">AB</MenuItem>
            </Select>
          </FormControl>
        </Section>
        <Section>
          <TextField
            fullWidth
            size="small"
            label="Data de Emissão"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
          <TextField
            fullWidth
            size="small"
            label="Data da 1 Habilitação"
            value={originalIssueDate}
            onChange={(e) => setOriginalIssueDate(e.target.value)}
          />
        </Section>
      </Content>
    </Container>
  )
}
