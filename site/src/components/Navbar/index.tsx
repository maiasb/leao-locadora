import { IconButton, Link } from '@mui/material'
import { Content, Navigation, SettingsArea } from './styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import { useNavigate } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()

  function handleLogOut() {
    navigate('/')
  }

  return (
    <Content>
      <Navigation>
        <Link href="/home" underline="none" sx={{ color: 'white' }}>
          Leão locadora
        </Link>
        <Link href="/clientes" underline="none" sx={{ color: 'white' }}>
          Clientes
        </Link>
        <Link href="/carros" underline="none" sx={{ color: 'white' }}>
          Carros
        </Link>
        <Link href="/locacoes" underline="none" sx={{ color: 'white' }}>
          Locação
        </Link>
      </Navigation>
      <SettingsArea>
        <IconButton sx={{ color: 'white' }}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }}>
          <SettingsIcon />
        </IconButton>
        <IconButton sx={{ color: 'white' }} onClick={handleLogOut}>
          <LogoutIcon />
        </IconButton>
      </SettingsArea>
    </Content>
  )
}
