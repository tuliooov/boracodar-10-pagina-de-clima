import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;

  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`
