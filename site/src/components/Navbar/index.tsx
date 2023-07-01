import { IconButton, Link } from '@mui/material'
import { Content, Navigation, SettingsArea } from './styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'

export function Navbar() {
  return (
    <Content>
      <Navigation>
        <Link href="/home" underline="none" sx={{ color: 'white' }}>
          Leão locadora
        </Link>
        <Link
          href="/clientes/cadastrar"
          underline="none"
          sx={{ color: 'white' }}
        >
          Clientes
        </Link>
        <Link
          href="/clientes/cadastrar"
          underline="none"
          sx={{ color: 'white' }}
        >
          Carros
        </Link>
        <Link
          href="/clientes/cadastrar"
          underline="none"
          sx={{ color: 'white' }}
        >
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
        <IconButton sx={{ color: 'white' }}>
          <LogoutIcon />
        </IconButton>
      </SettingsArea>
    </Content>
  )
}
