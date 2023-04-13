import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3.2rem;
`

export const Indexes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  span:first-child {
    font-size: 1.8rem;
    line-height: 2.2rem;
    color: ${(props) => props.theme['green-100']};
  }

  span:last-child {
    font-size: 4rem;
    line-height: 4.8rem;

    color: ${(props) => props.theme['gray-100']};
  }
`

export const Infos = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`
