import { Card as MuiCard } from '@mui/material'
import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  padding-right: 100px;
  height: 100%;
  justify-content: end;
  align-items: center;
`
export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  gap: 25px;
  padding: 30px 35px;
`
