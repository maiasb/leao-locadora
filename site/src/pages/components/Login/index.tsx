import { Button, TextField, Typography } from '@mui/material'
import { Card, Content, InputData } from './styles'

export function Login() {
  return (
    <Content>
      <Card>
        <Typography fontSize={30}>LOGIN</Typography>
        <InputData>
          <TextField variant="outlined" label="Usuário" />
        </InputData>
        <InputData>
          <TextField variant="outlined" label="Senha" />
        </InputData>
        <InputData>
          <Button size="large" variant="contained">
            ENTRAR
          </Button>
        </InputData>
      </Card>
    </Content>
  )
}
