import styled from 'styled-components'

const PaddingSizes = {
  sm: '1.2rem',
  md: '1.6rem',
  lg: '3.2rem',
  xlg: '4rem',
} as const

export interface ContainerProps {
  padding?: keyof typeof PaddingSizes
  gridArea: string
}

export const Container = styled.div<ContainerProps>`
  min-width: 27.7rem;

  grid-area: ${(props) => props.gridArea};

  border-radius: 1rem;
  padding: ${(props) => PaddingSizes[props.padding || 'md']};
  padding-top: ${(props) =>
    PaddingSizes[props.padding === 'xlg' ? 'xlg' : 'lg']};

  background-color: ${(props) => props.theme['purple-700']};
  backdrop-filter: blur(10px);

  position: relative;
`
