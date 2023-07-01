import { Link } from 'react-router-dom'
import { Content, Navigation, Typography } from './styles'

export function Navbar() {
  return (
    <Content>
      <Navigation>
        <Typography>Leão locadora</Typography>
        <Link to="/clientes/cadastro">Clientes</Link>
      </Navigation>
    </Content>
  )
}
