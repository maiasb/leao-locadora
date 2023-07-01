import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { CreateCustomer } from './pages/Customer/CreateCustomer'
import './App.scss'
import '@fontsource/roboto/300.css'
import { CustomerList } from './pages/Customer/CustomerList'
import { CarList } from './pages/Car/CarList'
import { CreateCar } from './pages/Car/CreateCar'
import { Toaster } from 'react-hot-toast'

function Layout() {
  return (
    <>
      <Toaster />
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
            <Route path="/clientes" element={<CustomerList />} />
            <Route path="/clientes/cadastrar" element={<CreateCustomer />} />
            <Route path="/carros" element={<CarList />} />
            <Route path="/carros/cadastrar" element={<CreateCar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
