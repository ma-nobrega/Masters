import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  html, body, #root{
    height:100vh
  }

  #root{
    display:flex;
    align-items:center;
    justify-content:center;
  }

  body{
    background: var(---color-background)
  }

  body,button, input, textarea{
    font: 500 1.6rem Poppins;
    color: var(--color-text-base)
  }

  :root {
  font-size: 60%;
  --color-background: #f0f3f7;
  --color-primary: #2a94f4;
  --color-secondary: #1772af;
  --color-title-in-primary: #e0f2ff;
  --color-text-in-primary: #98cdf5;
  --color-text-title: #26314d;
  --color-text-complement: #9C98A6;
  --color-text-base: #616880;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  }

  .container{
    width:90vw;
    max-width: 700px;
  }
  @media(min-width:700px){
    :root{
      font-size:62.5%;
    }
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }

`;
