import styled, { css } from 'styled-components';

type ContainerProps = {
  center: boolean;
};

function getCenterStyle(isCenter: boolean) {
  const styles = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  if (isCenter) return styles;
  return css``;
}

export const Container = styled.div<ContainerProps>`
  width: 300px;
  height: auto;
  padding: 20px;
  ${({ center }) => getCenterStyle(center)}
`;

export const Content = styled.form`
  display: grid;
  gap: 30px;
`;
