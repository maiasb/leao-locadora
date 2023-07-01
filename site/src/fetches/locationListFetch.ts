import useSWR from 'swr'
import api from '../services/api'
import { Location } from '../models/Location'

export const LocationListfetch = () => {
  const { data } = useSWR<Location[]>(
    'location_list',
    async (): Promise<Location[]> => {
      const { data: results } = await api.get(`/api/locacoes/`)

      return results as Location[]
    },
  )
  return { data }
}
