import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { SignIn } from './pages/components/SignIn'
import { SignUp } from './pages/components/SignUp'
import { Navbar } from './pages/components/Navbar'
import { Home } from './pages/Home'
import { CreateCustomer } from './pages/Customer/CreateCustomer'
import './App.scss'
import '@fontsource/roboto/300.css'

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
          <Route path="/" element={<SignIn />} />
          <Route path="/registrar" element={<SignUp />} />
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
