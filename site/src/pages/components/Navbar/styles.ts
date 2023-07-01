import { Typography as MuiTypography } from '@mui/material'
import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  background-color: black;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Typography = styled(MuiTypography)`
  color: #ffffff;
`
