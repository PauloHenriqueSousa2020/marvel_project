import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 0.8rem Outfit, sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    
    overflow: scroll;
    overflow-x: auto;
    
    ::-webkit-scrollbar {
      width: 0.5rem;
      max-height: 0.5rem;
    }

    ::-webkit-scrollbar-track-piece {
      background-color: transparent;
      -webkit-border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb:vertical {
      background-color: ${props => props.theme.colors.sectionBackground};
      -webkit-border-radius: 0.5rem;
    }
  }
`