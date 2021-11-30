import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 10rem 2rem 10rem;
`
export const Header = styled.div`
  height: 10rem;
  background: ${props => props.theme.colors.headerColor};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;

  .titleHeader {
    font-size: 2rem;
    font-weight: ${props => props.theme.weight.bold};
  }
  `