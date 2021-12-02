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
    font-size: 1.1rem;
    font-weight: ${props => props.theme.weight.bold};
    padding: 1rem 0rem;
  }
`

export const Input = styled.input`
  width: 30rem;
  height: 3rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.sectionBackground};
  font-size: 1rem;

`
export const Error = styled.div`
  display: flex;
  flex-direction: column;
`

export const Button = styled.button`
  width: 15rem;
  height: 3rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${props => props.theme.colors.sectionBackground};
  background: ${props => props.theme.colors.headerColor};
  font-size: 1rem;
  font-weight: ${props => props.theme.weight.bold};
`