import styled from "styled-components";

export const Modal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  position: absolute;
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
  background: #f9fafc;
  border: 10px solid ${({ theme }) => theme.colors.background};
  border-radius: 31px;
  padding: 2rem;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  .comicTitle {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.weight.bold};
    color: ${({ theme }) => theme.colors.text};
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

  .container-image {
    border: 4px solid #0A0F0D;
    height: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    
    img {
      height: 100%;
    }
  }

  .context {
    position: relative;

    .name {
      display: inline-flex;

      position: absolute;

      left: -25px;
      top: -20px;

      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
      
      h2 {
        padding: 0.5rem 0.8rem;
        background-color: #f9f9f9;
        border: 4px solid #0A0F0D;
        color: #0A0F0D;
        font-size: 1rem;
      }

    }

    .description {
      padding: 2.5rem;
      height: 200px;
      border-top: 4px solid #0A0F0D;
      border-right: 4px solid #0A0F0D;
      border-bottom: 4px solid #0A0F0D;
      color: #0A0F0D;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`