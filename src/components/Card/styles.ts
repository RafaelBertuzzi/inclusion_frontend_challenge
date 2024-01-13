import styled from 'styled-components';

interface IContainerProps {
  isSuccess: boolean;
}

export const Container = styled.div<IContainerProps>`
  height: 50px;
  width: 800px;
  border-radius: 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.success};
  border-left: 8px solid ${({ theme: { colors } }) => colors.success};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  grid-gap: 24px;
  align-items: center;
  padding-left: 24px;

  ${({ isSuccess, theme: { colors } }) =>
    !isSuccess &&
    `
    border: 1px solid ${colors.danger};
    border-left: 8px solid ${colors.danger};
  `}

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
    width: 240px;
    height: 200px;
    text-align: center;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hostname = styled.div``;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.danger};
    text-transform: uppercase;
  }
`;

export const Timestamp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
