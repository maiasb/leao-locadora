import { Content } from './styles'
import { PessoalData } from './components/PessoalData'
import { Address } from './components/Address'
import { CNH } from './components/CNH'

export function CreateCustomer() {
  return (
    <Content>
      <PessoalData />
      <Address />
      <CNH />
    </Content>
  )
}
