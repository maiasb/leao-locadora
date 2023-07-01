import { Content } from './styles'
import { PessoalData } from './components/PessoalData'
import { Address } from './components/Address'

export function CreateCustomer() {
  return (
    <Content>
      <PessoalData />
      <Address />
    </Content>
  )
}
