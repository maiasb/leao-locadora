import useSWR from 'swr'
import api from '../services/api'
import { Customer } from '../models/Customer'

export const Customersfetch = () => {
  const { data } = useSWR<Customer[]>(
    'customers',
    async (): Promise<Customer[]> => {
      const { data: results } = await api.get(`/api/clientes/`)

      return results as Customer[]
    },
  )
  return { data }
}
