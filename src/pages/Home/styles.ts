import styled from 'styled-components'

export const Container = styled.main`
  padding: 3.2rem;

  display: grid;
  grid-template-areas: 'now' 'air' 'suntime' 'forecast';
  gap: 2.4rem;

  @media (min-width: 678px) {
    padding: 4.8rem;
    grid-template-areas: 'now now' 'air suntime' 'forecast forecast';
  }

  @media (min-width: 914px) {
    grid-template-areas: 'now air' 'now suntime' 'forecast forecast';
  }

  @media (min-width: 1252px) {
    grid-template-areas: 'now air suntime' 'now forecast forecast';
  }
`
