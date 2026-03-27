import { Row } from '@app/components/layout';
import { Checkbox, Divider, Input, Link, Text } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { useState } from 'react';
import { Footer, Form, LoginContainer, PageWrapper, PictureContainer } from './LoginPage.styled';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log('Login', { email, password });
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <h1>Login</h1>
        <Text variant="subtitle" className="subTitle">
          See your growth and get consulting support!
        </Text>
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
          <Row $gap={0.25}>
            <Text variant="helper">Not registered yet?</Text>
            <Link to="#">Create an Account</Link>
          </Row>
        </Form>
        <Footer>
          <Text variant="footer">2022 Syncee, All rights reserved.</Text>
        </Footer>
      </LoginContainer>
      <PictureContainer />
    </PageWrapper>
  );
};
