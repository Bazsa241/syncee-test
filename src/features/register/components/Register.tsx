import { Row, Center } from '@app/components/layout';
import { Checkbox, Divider, Form, Input, Link, Spinner, Text } from '@app/components/ui';
import { Button } from '@app/components/ui/Button';
import { useState } from 'react';
import { GoogleLoginButton } from '@app/components/ui';
import { useRegisterForm } from '../hooks/useRegisterForm';

export const Register = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { error, fieldErrors, formState, handleGoogleRegister, handleSubmit, loading, setField } =
    useRegisterForm();

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <GoogleLoginButton
        type="button"
        label="Sign up with Google"
        onClick={() => handleGoogleRegister()}
        disabled={!acceptTerms}
      />
      <Divider>or Sign up with Email</Divider>
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
        autoComplete="new-password"
      />
      <Input
        label="Confirm password*"
        type="password"
        placeholder="Password"
        value={formState.confirmPassword}
        onChange={(e) => setField('confirmPassword', e.target.value)}
        error={fieldErrors.confirmPassword}
        autoComplete="new-password"
      />
      <Checkbox
        label="I accept the Terms and Conditions"
        checked={acceptTerms}
        onChange={(e) => setAcceptTerms(e.target.checked)}
      />
      <Button type="submit" disabled={!acceptTerms}>
        Register
      </Button>
      <Row $gap={0.25}>
        <Text $variant="helper">Already have an account?</Text>
        <Link to="/login">Login</Link>
      </Row>
      {error && <Text $variant="error">{error}</Text>}
    </Form>
  );
};
