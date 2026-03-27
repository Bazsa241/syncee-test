import { Row } from '@app/components/layout';
import { Checkbox, Divider, Input, Link } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { useState } from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
`;

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log('Login', { email, password });
  };

  return (
    <LoginWrapper>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Divider>or Sign in with Email</Divider>
        <Input
          label="Email*"
          error="This field is required"
          type="email"
          placeholder="mail@website.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />
        <Input
          label="Password*"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <Row $justify="between">
          <Checkbox label="Remember me" />
          <Link to="#">Forget password?</Link>
        </Row>
        <Button type="submit">Login</Button>
        <Row>
          <Link to="#">Create an Account</Link>
        </Row>
      </Form>
    </LoginWrapper>
  );
};
