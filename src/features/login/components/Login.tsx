import { Row, Center } from '@app/components/layout';
import { Checkbox, Divider, Form, Input, Link, Spinner, Text } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { GoogleLoginButton } from '@app/components/ui';
import { useLoginForm } from '../hooks/useLoginForm';

export const Login = () => {
  const { formState, setField, fieldErrors, error, handleGoogleLogin, handleSubmit, loading } =
    useLoginForm();

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <GoogleLoginButton type="button" onClick={() => handleGoogleLogin(formState.remember)} />
      <Divider>or Sign in with Email</Divider>
      {loading && (
        <Center>
          <Spinner />
        </Center>
      )}
      <Input
        label="Email*"
        type="email"
        placeholder="mail@website.com"
        value={formState.email}
        onChange={(e) => setField('email', e.target.value)}
        error={fieldErrors.email}
        autoComplete="username"
      />
      <Input
        label="Password*"
        type="password"
        placeholder="Password"
        value={formState.password}
        onChange={(e) => setField('password', e.target.value)}
        error={fieldErrors.password}
        autoComplete="current-password"
      />
      <Row $justify="between">
        <Checkbox
          label="Remember me"
          checked={formState.remember}
          onChange={(e) => setField('remember', e.target.checked)}
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
  );
};
