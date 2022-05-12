import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import FormPage from '../../components/FormPage';
import AuthForm from '../../components/AuthForm';
import AuthStore from '../../store/auth';

type RegPageProps = {
  pathToLogin: string;
};

function RegPage({ pathToLogin }: RegPageProps): ReactElement {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmitHandler = () => {
    setIsError(false);
    AuthStore.register({ email, password })
      .then((res) => setIsError(res))
      .catch(() => setIsError(true));
  };

  return (
    <FormPage>
      <AuthForm onSubmit={onSubmitHandler}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value.trim())}
        />
        {isError && <span>введите валидные данные</span>}
        <button type="submit">Registration</button>
        <Link to={pathToLogin}>go to login</Link>
      </AuthForm>
    </FormPage>
  );
}

export default observer(RegPage);
