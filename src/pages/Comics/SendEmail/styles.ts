import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 2rem;

  h2 {
    padding-bottom: 2rem;
  }
`

export const Content = styled.form`
  display: flex;
  justify-content: space-between;

  .inputError {
    border: 1px solid ${props => props.theme.colors.error};
    
    ::placeholder {
      color: ${props => props.theme.colors.error};
    }
  }

  .errorText {
    color: ${props => props.theme.colors.error};
    font-size: 0.8rem;
    font-weight: ${props => props.theme.weight.bold};
    padding: 0.5rem 0.5rem;
  }
`

export const Input = styled.input`
  width: 30rem;
  height: 3rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.sectionBackground};
  font-size: 1rem;

  @media screen and (max-width: 1366px) {
    width: 15rem;
  }

  @media (min-width: 1366px) and (max-width: 1520px) {
    width: 20rem;
  }

  @media (min-width: 1920px) and (max-width: 2280px) {
    width: 35rem;
  }

  @media (min-width: 2280px) {
    width: 45rem;
  }
`
export const Error = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  width: 18rem;
  height: 3rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme.colors.sectionBackground};
  background: ${props => props.theme.colors.headerColor};
  font-size: 1rem;
  font-weight: ${props => props.theme.weight.bold};

/*   @media screen and (max-width: 1366px) {
    width: 15rem;
  }

  @media screen and (min-width: 2150px) {
    width: 25rem;
  } */

  @media screen and (max-width: 1366px) {
    width: 15rem;
  }

  @media (min-width: 1366px) and (max-width: 1520px) {
    width: 20rem;
  }

  @media (min-width: 1920px) and (max-width: 2280px) {
    width: 25rem;
  }

  @media (min-width: 2280px) {
    width: 30rem;
  }

  &:hover {
    background: ${props => props.theme.colors.sectionBackground};
    transition: transform 0.8s ease 0s;
    transform: scale(1.05);
    opacity: 0.8;
  }
`