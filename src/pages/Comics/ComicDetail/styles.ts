import styled from "styled-components";

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(215, 216, 228, 0.7);
  transform-origin: left;
`

export const Container = styled.div`
  min-width: 70%;
  min-height: 80%;
  background: ${({ theme }) => theme.colors.sectionBackground};
  border: 0.6rem solid ${({ theme }) => theme.colors.headerColor};
  border-radius: 2rem;
  padding: 2rem;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  .comicTitle {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.weight.bold};

  }

  .closeButton {
    display: flex;
    border: none;
    align-items: center;
    gap: 0 1rem;
    background-color: transparent;
    cursor: pointer;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.text};

    svg {
      fill: ${({ theme }) => theme.colors.text};
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .blockImage {
    border: 0.25rem solid ${({ theme }) => theme.colors.headerColor};
    height: 18rem;
    box-shadow: 0 0.5rem 1.4rem ${({ theme }) => theme.colors.headerColor};
    
    img {
      height: 100%;
    }
  }

  .infosContainer {
    position: relative;
    background: ${({ theme }) => theme.colors.background};

    .title {
      display: inline-flex;
      position: absolute;
      left: -1.5rem;
      top: -1.2rem;
      box-shadow: 0 0.5rem 1.4rem ${({ theme }) => theme.colors.headerColor};
      
      h2 {
        padding: 0.5rem 0.8rem;
        background-color: ${({ theme }) => theme.colors.background};
        border: 0.2rem solid ${({ theme }) => theme.colors.headerColor};
    
        font-size: 1rem;
      }

    }

    .description {
      min-width: 50rem;
      max-width: 50rem;
      padding: 2.5rem;
      height: 12.5rem;
      border-top: 0.25rem solid ${({ theme }) => theme.colors.headerColor};;
      border-right: 0.25rem solid ${({ theme }) => theme.colors.headerColor};;
      border-bottom: 0.25rem solid ${({ theme }) => theme.colors.headerColor};;
  ;
      box-shadow: 0 0.3rem 1.2rem  ${({ theme }) => theme.colors.text};;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
  }
`

export const OtherInfos = styled.div`

`

