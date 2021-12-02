import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: #89CFF0;
  }

  .Toastify__toast--success {
    background: #4BB543;
  }

  .Toastify__toast--error {
    background: #FF9494;
  }
  
  .Toastify__toast {
    width: 24rem;
    height: 7.5rem;
    background: ${props => props.theme.colors.background};
    box-shadow: 0rem 0.3rem 0.45rem ${props => props.theme.colors.sectionBackground};
    border: 0.3rem solid ${props => props.theme.colors.background};
    border-radius: 1.25rem;
    right: 6em;
    padding: 0 1.4rem;

    button {
      margin-top: 1rem;
    }
  }

  .toastContainer {
    width: 100%;
    display: flex;
    padding: 1.25rem 0rem;
    flex-direction: column;

    p {
      color: ${props => props.theme.colors.text};
      font-size: 1rem;
      font-weight: ${props => props.theme.weight.bold};
    }
  }
`;
