import { useFormBeforeLogin } from '@app/features/form-before-login';
import { Content, Header, Wrapper } from './FormBeforeLogin.styled';
import { PageTitle } from '@app/components/ui/PageTitle';
import { Text } from '@app/components/ui';

export const FormBeforeLogin = () => {
  const { formBeforeLogin } = useFormBeforeLogin();

  return (
    <Wrapper>
      <Header>
        <PageTitle>Login form data</PageTitle>
      </Header>

      {formBeforeLogin && (
        <Content>
          <strong>Email:</strong> <p>{formBeforeLogin.email || 'empty'}</p>
          <strong>Password:</strong> <p>{formBeforeLogin.password || 'empty'}</p>
          <strong>Remember me:</strong> <p>{formBeforeLogin.remember ? 'Yes' : 'No'}</p>
        </Content>
      )}

      {!formBeforeLogin && <Text>No form data available</Text>}
    </Wrapper>
  );
};
