import { AuthPageLayout, Row } from '@app/components/layout';
import { Checkbox, Divider, Form, Input, Link, Loading, Text } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { useState } from 'react';
import { GoogleLoginButton } from '@app/components/ui';
import { useLogin } from '@app/features/auth';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);

  const { handleEmailLogin, handleGoogleLogin, loading, error } = useLogin();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    handleEmailLogin(email, password, remember);
    console.log('Login', { email, password, remember });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthPageLayout title="Login" subtitle="See your growth and get consulting support!">
      <Form onSubmit={handleSubmit}>
        <GoogleLoginButton type="button" onClick={() => handleGoogleLogin(remember)} />
        <Divider>or Sign in with Email</Divider>
        <Input
          label="Email*"
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
          <Checkbox
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <Link to="#">Forget password?</Link>
        </Row>
        <Button type="submit">Login</Button>
        <Row $gap={0.25}>
          <Text $variant="helper">Not registered yet?</Text>
          <Link to="/register">Create an Account</Link>
        </Row>
        {error && <Text $variant="error">{error}</Text>}
      </Form>
    </AuthPageLayout>
  );
};
