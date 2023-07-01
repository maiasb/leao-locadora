import {
  Button,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import { LocationListfetch } from '../../../fetches/locationListFetch'
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

export function LocationList() {
  const navigate = useNavigate()
  const { data: locationListFetchResponse } = LocationListfetch()

  return (
    <Content>
      <CardHeader>
        <DataItem>
          <ItemHeader>ID</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Cliente</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Carro</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Data de Retirada</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Opções</ItemHeader>
        </DataItem>
      </CardHeader>
      <Card>
        <CardContent>
          {(locationListFetchResponse &&
            ((locationListFetchResponse.length &&
              locationListFetchResponse.map((location) => (
                <Item key={location.id}>
                  <DataItem>
                    <Typography>{location.id}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{location.nome}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{location.modelo}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{location.data_retirada}</Typography>
                  </DataItem>
                  <DataItem>
                    <IconButton>
                      <ModeEditIcon />
                    </IconButton>
                  </DataItem>
                </Item>
              ))) || <Typography>Nenhuma locação cadastrada</Typography>)) || (
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
        <Button
          variant="contained"
          onClick={() => navigate('/locacoes/cadastrar')}
        >
          Cadastrar nova locação
        </Button>
      </CardFooter>
    </Content>
  )
}
