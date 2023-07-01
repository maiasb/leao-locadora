import { Buttons, Content, Section } from './styles'
import { useState } from 'react'
import api from '../../../services/api'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { CustomerListFetch } from '../../../fetches/customerListFetch'
import { CarListfetch } from '../../../fetches/carListFetch'

export function CreateLocation() {
  const navigate = useNavigate()
  const { data: customerListFetchResponse } = CustomerListFetch()
  const { data: carListFetchResponse } = CarListfetch()

  const [customerIdSelected, setCustomerIdSelected] = useState<number | null>(
    null,
  )
  const [carIdSelected, setCarIdSelected] = useState<number | null>(null)
  const [locationType, setLocationType] = useState('')
  const [fuel, setFuel] = useState<number | null>(null)
  const [expertise, setExpertise] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState<number | null>(null)
  const [additionalPrice, setAdditionalPrice] = useState<number | null>(null)
  const [isClear, setIsClear] = useState(false)
  const [withSafe, setWithSafe] = useState(false)

  function handleCreateLocation() {
    const body = {
      id_cliente: customerIdSelected,
      id_carro: carIdSelected,
      tipo_locacao: locationType,
      seguro: withSafe,
      data_retirada: date,
      pericia_retirada: expertise,
      litros_combustivel_retirada: fuel,
      limpo_retirada: isClear,
      preco: price,
      preco_adicional: additionalPrice,
    }

    api
      .post('/api/locacoes', body)
      .then(() => {
        toast.success('Locação cadastrada!')
        clearPage()
      })
      .catch((err) => console.log(err))
  }

  function clearPage() {
    setCustomerIdSelected(null)
    setCarIdSelected(null)
    setLocationType('')
    setFuel(null)
    setExpertise('')
    setDate('')
    setPrice(null)
    setAdditionalPrice(null)
    setIsClear(false)
    setWithSafe(false)
  }

  return (
    <Content>
      <Section>
        <FormControl fullWidth size="small">
          <InputLabel>Cliente</InputLabel>
          <Select
            label="Cliente"
            value={customerIdSelected || ''}
            onChange={(e) =>
              setCustomerIdSelected(e.target.value as unknown as number)
            }
          >
            <MenuItem value="">Selecione</MenuItem>
            {customerListFetchResponse &&
              customerListFetchResponse.map((customer) => (
                <MenuItem key={customer.id} value={customer.id}>
                  {customer.nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth size="small">
          <InputLabel>Carro</InputLabel>
          <Select
            label="Carro"
            value={carIdSelected || ''}
            onChange={(e) =>
              setCarIdSelected(e.target.value as unknown as number)
            }
          >
            <MenuItem value="">Selecione</MenuItem>
            {carListFetchResponse &&
              carListFetchResponse.map((car) => (
                <MenuItem key={car.id} value={car.id}>
                  {car.modelo}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Section>
      <Section>
        <FormControl fullWidth size="small">
          <InputLabel>Tipo de Locação</InputLabel>
          <Select
            label="Tipo de Locação"
            value={locationType}
            onChange={(e) => setLocationType(e.target.value)}
          >
            <MenuItem value="">Selecione</MenuItem>
            <MenuItem value="D">Diária</MenuItem>
            <MenuItem value="KM">Quilometragem</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          size="small"
          label="Data de Retirada"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Section>
      <Section>
        <TextField
          fullWidth
          type="number"
          size="small"
          label="Litros no Tanque"
          value={fuel || ''}
          onChange={(e) => setFuel(e.target.value as unknown as number)}
        />
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            gap: '40px',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={withSafe}
                onChange={(e) => setWithSafe(e.target.checked)}
              />
            }
            label="Contratar seguro?"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isClear}
                onChange={(e) => setIsClear(e.target.checked)}
              />
            }
            label="O veículo está limpo?"
          />
        </Box>
      </Section>
      <Section>
        <TextField
          fullWidth
          type="number"
          size="small"
          label="Preço"
          value={price || ''}
          onChange={(e) => setPrice(e.target.value as unknown as number)}
        />
        <TextField
          fullWidth
          type="number"
          size="small"
          label="Preço Adicional"
          value={additionalPrice || ''}
          onChange={(e) =>
            setAdditionalPrice(e.target.value as unknown as number)
          }
        />
      </Section>

      <TextField
        label="Perícia"
        multiline
        value={expertise}
        onChange={(e) => setExpertise(e.target.value)}
      />

      <Buttons>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate('/carros')}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={handleCreateLocation}>
          Cadastrar
        </Button>
      </Buttons>
    </Content>
  )
}
