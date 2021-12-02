import styled from "styled-components";

export const Container = styled.div`
`

export const Content = styled.div`
  h1 {
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    color: ${props => props.theme.colors.text};
  }

  display: flex;
  justify-content: space-between;
`
export const Input = styled.div`
  width: 40%;
  height: 3rem;
  background: #fff; 
  border-radius: 2rem;
  box-shadow: 0px 3px 6px #d7d8e4;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    height: 3rem;
    padding-left: 1rem;
    border: none;
    font-size: 0.8rem;
    font-weight: ${props => props.theme.weight.bold};
  }

  button {
    height: 46px;
    margin: 0 1.5rem;
    padding: 0;
    background: transparent;
    font-weight: normal;
    font-style: italic;
    border: none;
    cursor: pointer;
    color: #000;
  }
`
export const Section = styled.div`
  justify-items: center;
  padding: 2rem 2rem 5rem 2rem;
  background: ${props => props.theme.colors.sectionBackground};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 7rem;
  justify-content: center;
  border-radius: 1rem;

  .selected {
    background: ${props => props.theme.colors.headerColor};
    transform: scale(1.1);
    transition: transform 0.8s ease 0s; 

    .cardInfo {
      background: ${props => props.theme.colors.selected};
    }
  }
`

export const Card = styled.div`
  width: 15rem;
  height: 16rem;
  border-radius: 1rem;
  background: ${props => props.theme.colors.background};
  position: relative;
  cursor: pointer;

  .cardInfo {
    width: 15rem;
    background: ${props => props.theme.colors.background};
    padding: 0.5rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    color: ${props => props.theme.colors.text};

    .cardName {
      text-align: center;
      font-size: 1rem;
      font-weight: ${props => props.theme.weight.bold};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .cardDetail {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 10;
      font-size: 1rem;
      padding: 0.2rem;
      cursor: url('http://www.rw-designer.com/cursor-extern.php?id=142520'), default;

      svg {
        margin-left: 0.5rem;
      }
    }
  }

  .cardImage {
    width: 15rem;
    height: 15rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
`

export const NotFound = styled.div`
  padding-top: 5rem;
`