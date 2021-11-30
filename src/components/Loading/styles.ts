import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
      transform: scale(2);
  }
  50% {
      transform: scale(1);
  }
  100% {
      transform: scale(2);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s infinite linear;

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 0.2rem;
    background: transparent;
  }

  span {
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    font-weight: 700;
  }
`;