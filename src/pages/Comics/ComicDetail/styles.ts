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
  width: 75vw;
  height: 90%;;
  background: ${({ theme }) => theme.colors.sectionBackground};
  border: 0.6rem solid ${({ theme }) => theme.colors.headerColor};
  border-radius: 2rem;
  padding: 2rem;

  @media screen and (max-width: 1366px) {
    width: 85vw;
  }

  @media (min-width: 1366px) and (max-width: 1600px) {
    width: 85vw;
  }

  @media (min-width: 1600px) and (max-width: 1920px) {
    width: 75vw;  
  }

  @media (min-width: 1920px) and (max-width: 2280px) {
    width: 65vw;  
    height: 70%;
  }

  @media (min-width: 2280px) {
    width: 55vw;
    height: 70%;
  }

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
    cursor: url('http://www.rw-designer.com/cursor-extern.php?id=142520'), default;
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
  padding-bottom: 2rem;

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

    .scrollBar {
      width: 50rem;
      height: 15rem;
      overflow-y: auto;
      border-top: 0.25rem solid ${({ theme }) => theme.colors.headerColor};
      border-right: 0.25rem solid ${({ theme }) => theme.colors.headerColor};
      border-bottom: 0.25rem solid ${({ theme }) => theme.colors.headerColor};
      box-shadow: 0 0.3rem 1.2rem  ${({ theme }) => theme.colors.text};
      padding: 2.5rem;

      &::-webkit-scrollbar-track {
        border-radius: 0.6rem;
        background-color: transparent;
      }

      &::-webkit-scrollbar {
        width: 0.25rem;
        border-radius: 1.2rem;
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 1.2rem;
        background-color: ${props => props.theme.colors.sectionBackground};
      }
    }

    .description {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }
  }
`

export const OtherInfos = styled.div`
  display: grid;
  grid-gap: 2rem 5rem;
  grid-template-columns: repeat(3, 1fr);
`

export const InfosContent = styled.div`
  border: 0.25rem solid ${({ theme }) => theme.colors.headerColor};
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem 0rem 2rem 5rem;
  height: fit-content;
  max-height: 50%;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 0.6rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
    border-radius: 1.2rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 1.2rem;
    background-color: ${props => props.theme.colors.sectionBackground};
  }

  .infosContainerTitle {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  .infosContainerSubTitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }


`

export const Url = styled.div`
  padding-top: 2rem;
  word-wrap: break-word;


  .infosContainerUrl {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`