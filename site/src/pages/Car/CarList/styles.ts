import { Box, Typography } from '@mui/material'
import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  padding: 30px;
  margin-bottom: 30px;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const ItemHeader = styled(Typography)`
  color: gray;
`

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`
export const DataItem = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
