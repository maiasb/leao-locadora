import { Button, TextField, Typography } from '@mui/material'
import { Card, Content } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function SignUp() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmation, setEmailConfirmation] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function signUp() {
    navigate('/')
  }

  return (
    <Content>
      <Card>
        <Typography fontSize={30}>CADASTRE-SE</Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirmar e-mail"
          value={emailConfirmation}
          onChange={(e) => setEmailConfirmation(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Confirmar senha"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button size="large" variant="contained" onClick={signUp}>
          CADASTRAR
        </Button>
        <Typography>
          Já possui uma conta? <Link to="/">Entrar</Link>
        </Typography>
      </Card>
    </Content>
  )
}
