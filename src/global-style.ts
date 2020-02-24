import { createGlobalStyle } from 'styled-components'
import { FontWeights, Colors } from './lib/style-guide'

import InterFontWoff from './assets/fonts/inter/inter-regular.woff'
import InterFontWoff2 from './assets/fonts/inter/inter-regular.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: local(Inter), local(Inter), url(${InterFontWoff2}) format('woff2'),
    url(${InterFontWoff}) format('woff');;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-style: normal;
  }

  body, input {
    font-family: proxima-nova, sans-serif;
    font-weight: ${FontWeights.PR};
    font-size: 14px;
    line-height: 1.4rem;
    color: ${Colors.TX1};
  }

  svg, img {
    display: block;
  }

  #root {
    display: flex;
    min-height: 100vh;
    background: ${Colors.BG3};
  }
`
