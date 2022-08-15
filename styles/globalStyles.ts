import { css } from '@emotion/react'
import { colours } from './colors'
export const globalStyles = css`
  @font-face {
    font-family: 'Montserrat';
  }
  @font-face {
    font-family: 'Montserrat';
  }
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h2 {
    color: ${colours.greys.bg}
  }
  *:focus {
    outline-style: solid;
    outline-offset: -1px;
  }
}`
