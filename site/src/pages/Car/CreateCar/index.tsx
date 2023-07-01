import { Buttons, Content, Section } from './styles'
import { useState } from 'react'
import api from '../../../services/api'
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function CreateCar() {
  const navigate = useNavigate()

  const [plate, setPlate] = useState('')
  const [renavam, setRenavam] = useState('')
  const [vin, setVin] = useState('')
  const [color, setColor] = useState('')
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [fabricationYear, setFabricationYear] = useState('')
  const [modelYear, setModelYear] = useState('')
  const [fuelType, setFuelType] = useState('')

  function handleCreateCar() {
    const body = {
      placa: plate,
      renavam,
      chassi: vin,
      marca: brand,
      modelo: model,
      ano_fabricacao: fabricationYear,
      ano_modelo: modelYear,
      cor: color,
      tipo_combustivel: fuelType,
    }

    api
      .post('/api/carros', body)
      .then(() => {
        toast.success('Carro cadastrado!')
        clearPage()
      })
      .catch((err) => console.log(err))
  }

  function clearPage() {
    setPlate('')
    setRenavam('')
    setVin('')
    setColor('')
    setBrand('')
    setModel('')
    setFabricationYear('')
    setModelYear('')
    setFuelType('')
  }

  return (
    <Content>
      <Section>
        <TextField
          fullWidth
          size="small"
          label="Placa"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="Renavam"
          value={renavam}
          onChange={(e) => setRenavam(e.target.value)}
        />
      </Section>
      <Section>
        <TextField
          fullWidth
          size="small"
          label="Chassi"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="Cor"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </Section>
      <Section>
        <TextField
          fullWidth
          size="small"
          label="Marca"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="Modelo"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </Section>
      <Section>
        <TextField
          fullWidth
          size="small"
          label="Ano de Fabricação"
          value={fabricationYear}
          onChange={(e) => setFabricationYear(e.target.value)}
        />
        <TextField
          fullWidth
          size="small"
          label="Ano do Modelo"
          value={modelYear}
          onChange={(e) => setModelYear(e.target.value)}
        />
      </Section>
      <Grid container>
        <Grid item xs={5.9}>
          <FormControl fullWidth size="small">
            <InputLabel>Tipo de Combustível</InputLabel>
            <Select
              label="Tipo de Combustível"
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
            >
              <MenuItem value="">Selecione</MenuItem>
              <MenuItem value="G">Gasolina</MenuItem>
              <MenuItem value="D">Diesel</MenuItem>
              <MenuItem value="E">Etanol</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Buttons>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate('/carros')}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={handleCreateCar}>
          Cadastrar
        </Button>
      </Buttons>
    </Content>
  )
}
