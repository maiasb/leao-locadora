import { styled } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Section = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`
