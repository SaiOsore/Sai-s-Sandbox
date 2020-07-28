import { css } from 'styled-components';

const optimize = css`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
  h6, p, blockquote, pre,a, abbr, acronym, address, big,
  cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
  strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
  dd, ol, ul, li,fieldset, form, label, legend,table, caption,
  tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ul,ol {
    list-style-type: none;
  }
  
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline
  }
  
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  
  [hidden],
  template {
    display: none;
  }
  
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: default;
  }
  
  html|* > svg {
    transform-origin: 50% 50% 0;
  }
  
  body {
    font-size: 100%;
    line-height: 1;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    margin: 0;
    padding: 0;
  }
  
  a {
    background: transparent;
    text-decoration: none;
  }
  
  pre {
    tab-size: 4;
    white-space: pre-wrap;
  }
  
  q {
    quotes: '\\201C' '\\201D' '\\2018' '\\2019';
  }
  
  img {
    border: none;
  }
  
  svg:not(:root) {
    overflow: hidden;
  }
  
  button,
  input {
    line-height: normal;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button {
    overflow: visible;
  }
  
  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  
  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  
  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
  }
  
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  
  input[type='search'] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }
  
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: none;
    padding: 0;
  }
  
  textarea {
    overflow: auto;
    vertical-align: top;
  }
  
  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }
  
  input,
  select,
  textarea {
    border-radius: 0;
  }
  
  input,
  textarea {
    resize: none;
    border: 0;
  }
  
  [placeholder]:focus::placeholder {
    color: transparent;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default optimize;
