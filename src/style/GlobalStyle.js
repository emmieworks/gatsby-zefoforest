import { css, createGlobalStyle, keyframes } from "styled-components"
import { rgba } from "polished"

/* ===============================================
#  color setting
=============================================== */
export const colors = {}

colors.background = "#fffcf5"
colors.text = "#707070"

colors.lightGray = "#ddd"
colors.gray = "#96acb3"

colors.white = "#FFFFFF"

colors.pink = "#F2B1A4"
colors.primary = "#91C294"
colors.primaryLight = rgba("#91C294", 0.15)
colors.primaryPale = rgba("#91C294", 0.07)

colors.secondary = "#725444"

/* ===============================================
#  other variables
=============================================== */
export const fadeIn = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
`
export const size = {
  width: "800px",
  smallMargin: "30px",
  middleMargin: "60px",
  largeMargin: "100px",
}

/* ===============================================
#  set css variables
=============================================== */
function setColor() {
  let styles = ""
  for (const key in colors) {
    styles += `--${key}: ${colors[key]};`
  }
  return css`
    :root {
      ${styles}
      --width: ${size.width};
      --smallMargin: ${size.smallMargin};
      --middleMargin: ${size.middleMargin};
      --largeMargin: ${size.largeMargin};
    }
  `
}

/* ===============================================
#  font setting
=============================================== */
const font = css`
  font-family: "Helvetica Neue",
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    "ヒラギノ角ゴ ProN W3",
    Arial,
    メイリオ, Meiryo,
    sans-serif;
  word-wrap: break-word;
  word-break: break-all;
  -moz-font-feature-settings: "palt";
  -webkit-font-feature-settings: "palt";
  font-feature-settings: "palt";
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: auto;
  -webkit-text-stroke: 1px transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  letter-spacing: 0.05rem;
  font-weight: 400;
  color: var(--text);
`

/* ===============================================
#  global style
=============================================== */
const GlobalStyle = createGlobalStyle`
  ${setColor}
  html {
    font-size: 62.5%;
  }
  body {
    ${font}
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    min-height: 100vh;
    background: var(--background);
    word-break: break-all;
    a {
      color: var(--secondary);
      -webkit-transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
      transition: all  0.3s ease;
      &:hover{
        opacity:0.6;
      }
    }
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: var(--secondary);
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  input, button, textarea, button, select {
    ${font}
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    line-height: 1.5;
    font-size: inherit;
    -webkit-appearance: none;
    &:focus {
      border: none;
      outline: none;
    }
  }
  ::selection {
    background: rgba(205, 227, 206, 0.35);
  }

  .btn {
    display: block;
    width: 160px;
    padding: 10px 30px;
    color: var(--text);
    border: 1px solid var(--text);
    background-color: var(--white);
    border-radius: 30px;
    text-align: center;
    font-family: 'Montserrat';
    margin: 60px auto;
    text-decoration: none;
    text-transform:uppercase;
  }

  .container {
    width: var(--width);
    margin: 0 auto;
    @media screen and (max-width: 780px) {
      max-width: 80%;
      width: 80%;
    }
  }

  /* ===============================================
  # smart phone
  =============================================== */
  @media screen and (max-width: 780px) {
    html, body {
      font-size: 14px;
    }
    .pc {
      display: none !important;
    }
  }

  /* ===============================================
  # pc
  =============================================== */
  @media screen and (min-width: 781px) {
    html, body {
      font-size: 16px;
    }
    .sp {
      display: none !important;
    }
  }
`

export default GlobalStyle
