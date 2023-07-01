import {
  Button,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material'
import { CustomerListFetch } from '../../../fetches/customerListFetch'
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

export function CustomerList() {
  const navigate = useNavigate()
  const { data: customerListFetchResponse } = CustomerListFetch()

  return (
    <Content>
      <CardHeader>
        <DataItem>
          <ItemHeader>ID</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Nome</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>CPF</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Nascimento</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Telefone</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>É whatsapp?</ItemHeader>
        </DataItem>
        <DataItem>
          <ItemHeader>Opções</ItemHeader>
        </DataItem>
      </CardHeader>
      <Card>
        <CardContent>
          {(customerListFetchResponse &&
            ((customerListFetchResponse.length &&
              customerListFetchResponse.map((customer) => (
                <Item key={customer.id}>
                  <DataItem>
                    <Typography>{customer.id}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{customer.nome}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{customer.cpf}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{customer.nascimento}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{customer.telefone}</Typography>
                  </DataItem>
                  <DataItem>
                    <Typography>{customer.whatsapp}</Typography>
                  </DataItem>
                  <DataItem>
                    <IconButton>
                      <ModeEditIcon />
                    </IconButton>
                  </DataItem>
                </Item>
              ))) || <Typography>Nenhum cliente cadastrado</Typography>)) || (
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
          onClick={() => navigate('/clientes/cadastrar')}
        >
          Adicionar novo cliente
        </Button>
      </CardFooter>
    </Content>
  )
}
