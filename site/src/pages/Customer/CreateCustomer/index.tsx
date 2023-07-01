import { Buttons, Content } from './styles'
import { PessoalData } from './components/PessoalData'
import { Address } from './components/Address'
import { License } from './components/License'
import { useState } from 'react'
import api from '../../../services/api'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function CreateCustomer() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [birth, setBirth] = useState('')
  const [phone, setPhone] = useState('')
  const [isPhoneWhatsapp, setIsPhoneWhatsapp] = useState(false)

  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [street, setStreet] = useState('')
  const [addressNumber, setAddressNumber] = useState('')
  const [complement, setComplement] = useState('')

  const [licenseNumber, setLicenseNumber] = useState('')
  const [licenseCategory, setLicenseCategory] = useState('')
  const [issueDate, setIssueDate] = useState('')
  const [originalIssueDate, setOriginalIssueDate] = useState('')

  function handleCreateCustomer() {
    const body = {
      nome: name,
      cpf,
      nascimento: birth,
      telefone: phone,
      whatsapp: isPhoneWhatsapp,
      endereco: {
        cep: zipCode,
        rua: street,
        complemento: complement,
        bairro: neighborhood,
        municipio: city,
        numero: addressNumber,
      },
      cnh: {
        numero: licenseNumber,
        categoria: licenseCategory,
        data_emissao: issueDate,
        data_provisoria: originalIssueDate,
      },
    }

    api
      .post('/api/clientes', body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  return (
    <Content>
      <PessoalData
        name={name}
        cpf={cpf}
        birth={birth}
        phone={phone}
        isPhoneWhatsapp={isPhoneWhatsapp}
        setName={setName}
        setCpf={setCpf}
        setBirth={setBirth}
        setPhone={setPhone}
        setIsPhoneWhatsapp={setIsPhoneWhatsapp}
      />
      <Address
        zipCode={zipCode}
        city={city}
        neighborhood={neighborhood}
        street={street}
        addressNumber={addressNumber}
        complement={complement}
        setZipCode={setZipCode}
        setCity={setCity}
        setNeighborhood={setNeighborhood}
        setStreet={setStreet}
        setAddressNumber={setAddressNumber}
        setComplement={setComplement}
      />
      <License
        licenseNumber={licenseNumber}
        licenseCategory={licenseCategory}
        issueDate={issueDate}
        originalIssueDate={originalIssueDate}
        setLicenseNumber={setLicenseNumber}
        setLicenseCategory={setLicenseCategory}
        setIssueDate={setIssueDate}
        setOriginalIssueDate={setOriginalIssueDate}
      />
      <Buttons>
        <Button
          variant="outlined"
          color="error"
          onClick={() => navigate('/clientes')}
        >
          Voltar
        </Button>
        <Button variant="contained" onClick={handleCreateCustomer}>
          Cadastrar
        </Button>
      </Buttons>
    </Content>
  )
}
