import { Button, TextField, Typography } from '@mui/material'
import { AreaLinks, Card, Content } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function SignIn() {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    navigate('/home')
  }
  return (
    <Content>
      <Card>
        <Typography fontSize={30}>LOGIN</Typography>
        <TextField
          sx={{ width: '100%' }}
          variant="outlined"
          label="Usuário"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <TextField
          sx={{ width: '100%' }}
          variant="outlined"
          label="Senha"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button size="large" variant="contained" onClick={handleLogin}>
          ENTRAR
        </Button>
        <AreaLinks>
          <Typography>
            Não tem uma conta? <Link to="/registrar">Cadastre-se</Link>
          </Typography>
          <Typography>
            Perdeu sua senha? <Link to="/recuperar-senha">Recuperar Senha</Link>
          </Typography>
        </AreaLinks>
      </Card>
    </Content>
  )
}
