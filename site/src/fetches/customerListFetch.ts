import useSWR from 'swr'
import api from '../services/api'
import { Customer } from '../models/Customer'

export const CustomerListFetch = () => {
  const { data } = useSWR<Customer[]>(
    'customer_list',
    async (): Promise<Customer[]> => {
      const { data: results } = await api.get(`/api/clientes/`)

      return results as Customer[]
    },
  )
  return { data }
}
