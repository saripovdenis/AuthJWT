import React, { ReactElement, ReactNode } from 'react';
import { Container, Content } from './styled';

type FormPageProps = {
  children: ReactNode;
};

export default function FormPage({ children }: FormPageProps): ReactElement {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
