import { AuthPageLayout, Row } from '@app/components/layout';
import { Checkbox, Divider, Form, Input, Link, Loading, Text } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { useState } from 'react';
import { GoogleLoginButton } from '@app/components/ui';
import { useRegister } from '@app/features/auth';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { handleEmailRegister, handleGoogleRegister, loading } = useRegister();

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log('register', { email, password });
    handleEmailRegister(email, password);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthPageLayout title="Create Account" subtitle="Join Syncee and grow your business!">
      <Form onSubmit={handleSubmit}>
        <GoogleLoginButton
          type="button"
          label="Sign up with Google"
          onClick={() => handleGoogleRegister()}
          disabled={!acceptTerms}
        />
        <Divider>or Sign up with Email</Divider>
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
          autoComplete="new-password"
        />
        <Input
          label="Confirm password*"
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />
        <Checkbox
          label="I accept the Terms and Conditions"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
        />
        <Button type="submit" disabled={!acceptTerms || password !== confirmPassword}>
          Register
        </Button>
        <Row $gap={0.25}>
          <Text $variant="helper">Already have an account?</Text>
          <Link to="/login">Login</Link>
        </Row>
      </Form>
    </AuthPageLayout>
  );
};
