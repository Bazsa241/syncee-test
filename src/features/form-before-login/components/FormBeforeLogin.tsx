import { useFormBeforeLogin } from '@app/features/form-before-login';

export const FormBeforeLogin = () => {
  const { formBeforeLogin } = useFormBeforeLogin();

  if (!formBeforeLogin) {
    return (
      <div>
        <h2>No form data available</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Form data received!</h2>
      <p>
        <strong>Email:</strong> {formBeforeLogin.email || 'empty'}
      </p>
      <p>
        <strong>Password:</strong> {formBeforeLogin.password || 'empty'}
      </p>
      <p>
        <strong>Remember me:</strong> {formBeforeLogin.remember ? 'Yes' : 'No'}
      </p>
    </div>
  );
};
