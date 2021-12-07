import { createGlobalStyle } from 'styled-components'
import '@fontsource/cuprum/index.css'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body, html {
    padding: 0;
    margin: 0;
    font-family: "Cuprum", sans-serif;
  }

  .separator {
    flex: 1;
  }
`
