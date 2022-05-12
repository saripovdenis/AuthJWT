import React, { ReactElement, ReactNode, FormEvent } from 'react';
import { Container, Content } from './styled';

type AuthFormProps = {
  children: Array<ReactNode>;
  center?: boolean;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
};

export default function AuthForm({
  children,
  center = true,
  onSubmit = () => {},
}: AuthFormProps): ReactElement {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <Container center={center}>
      <Content onSubmit={onSubmitHandler}>{children}</Content>
    </Container>
  );
}
