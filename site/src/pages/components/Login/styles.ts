import { Card as MuiCard } from '@mui/material'
import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  height: 100%;
  padding: 100px;
  justify-content: end;
`
export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  gap: 50px;
  padding: 50px 20px;
`
export const InputData = styled.div`
  display: flex;
  flex-direction: column;
`
