import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;

    li {
      margin: 0 0.4rem;
      list-style: none;

      button {
        cursor: pointer;
        background: ${props => props.theme.colors.headerColor};
        color: #F9F9F9;
        border: 1px solid ${props => props.theme.colors.headerColor};
        padding: 0.5rem 0.7rem;
        border-radius: 7px;
        font-weight: 600;
        transition: ${props => props.theme.colors.headerColor} 0.2s;

        &:hover {
          background: ${props => props.theme.colors.background};
          color: ${props => props.theme.colors.text};
        }
      }

      .current-page {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
      }
    }
  }
`;