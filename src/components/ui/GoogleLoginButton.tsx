import { Button } from '@app/components/ui';
import googleIcon from '@app/assets/google-48.png';

type GoogleLoginButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const GoogleLoginButton = ({
  label = 'Sign in with Google',
  ...props
}: GoogleLoginButtonProps) => (
  <Button variant="secondary" {...props}>
    <img src={googleIcon} alt="Google login icon" width="24" />
    <span>{label}</span>
  </Button>
);
