import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreateCustomer } from './pages/Customer/CreateCustomer'
import { Navbar } from './pages/components/Navbar'
import './App.scss'
import '@fontsource/roboto/300.css'
import { Login } from './pages/components/Login'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/clientes/cadastrar" element={<CreateCustomer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
