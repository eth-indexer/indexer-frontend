import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<{ size: 'large' | 'small' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size === 'small' ? '24px' : '48px')};
  height: ${({ size }) => (size === 'small' ? '24px' : '48px')};
  animation: ${rotate} 0.5s linear infinite;
`;
