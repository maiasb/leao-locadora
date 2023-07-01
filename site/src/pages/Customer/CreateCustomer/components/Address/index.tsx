import { TextField, Typography } from '@mui/material'
import { Container, Content, Section } from './styles'

interface AddressProps {
  zipCode: string
  city: string
  neighborhood: string
  street: string
  addressNumber: string
  complement: string
  setZipCode(zipCode: string): void
  setCity(city: string): void
  setNeighborhood(neighborhood: string): void
  setStreet(street: string): void
  setAddressNumber(addressNumber: string): void
  setComplement(complement: string): void
}

export function Address({
  zipCode,
  city,
  neighborhood,
  street,
  addressNumber,
  complement,
  setZipCode,
  setCity,
  setNeighborhood,
  setStreet,
  setAddressNumber,
  setComplement,
}: AddressProps) {
  return (
    <Container>
      <Typography>Endereço</Typography>
      <Content>
        <Section>
          <TextField
            size="small"
            fullWidth
            label="CEP"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Section>
        <Section>
          <TextField
            size="small"
            fullWidth
            label="Bairro"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Rua"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </Section>
        <Section>
          <TextField
            size="small"
            fullWidth
            label="Número"
            value={addressNumber}
            onChange={(e) => setAddressNumber(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Complemento"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />
        </Section>
      </Content>
    </Container>
  )
}
