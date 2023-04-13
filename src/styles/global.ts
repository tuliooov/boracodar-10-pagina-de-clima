import { createGlobalStyle } from 'styled-components'

import bodyBackground from '../assets/body-background.png'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        min-height: 100vh;
        min-width: 37.2rem;
        overflow: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        font-weight: 700;

        color: ${(props) => props.theme['gray-300']};
        background-color: ${(props) => props.theme['purple-500']};
        
        position: relative;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;

            background-image: url(${bodyBackground});
            background-repeat: no-repeat;
            background-size: cover;
            
            filter: blur(20px);
        }
    }
`
