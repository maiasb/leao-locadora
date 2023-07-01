import useSWR from 'swr'
import api from '../services/api'
import { Car } from '../models/Car'

export const CarListfetch = () => {
  const { data } = useSWR<Car[]>('car_list', async (): Promise<Car[]> => {
    const { data: results } = await api.get(`/api/carros/`)

    return results as Car[]
  })
  return { data }
}
