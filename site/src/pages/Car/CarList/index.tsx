import {
  Button,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import {
  CardFooter,
  CardHeader,
  Content,
  DataItem,
  Item,
  ItemHeader,
} from './styles'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useNavigate } from 'react-router-dom'
import { CarListfetch } from '../../../fetches/carListFetch'

export function CarList() {
  const navigate = useNavigate()
  const { data: carListFetchResponse } = CarListfetch()

  function handleNavigateToCreateCar() {
    navigate('/carros/cadastrar')
  }

  return (
    <Content>
      <CardHeader>
        <DataItem>
          <ItemHeader>ID</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Marca</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Modelo</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Cor</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Opções</ItemHeader>
        </DataItem>
      </CardHeader>
      <Card>
        <CardContent>
          {(carListFetchResponse &&
            ((carListFetchResponse.length &&
              carListFetchResponse.map((car) => (
                <Item key={car.id}>
                  <DataItem>
                    <Typography>{car.id}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{car.marca}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{car.modelo}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{car.cor}</Typography>
                  </DataItem>
                  <DataItem>
                    <IconButton>
                      <ModeEditIcon />
                    </IconButton>
                  </DataItem>
                </Item>
              ))) || <Typography>Nenhum carro cadastrado</Typography>)) || (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </CardContent>
      </Card>
      <CardFooter>
        <Button variant="outlined" color="error">
          Voltar
        </Button>
        <Button variant="contained" onClick={handleNavigateToCreateCar}>
          Adicionar novo carro
        </Button>
      </CardFooter>
    </Content>
  )
}
