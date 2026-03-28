import { Center } from '@app/components/layout';
import { FormBeforeLogin } from '@app/features/form-before-login';

export const HomePage = () => {
  return (
    <div>
      <Center>
        <h1>HomePage</h1>
      </Center>
      <FormBeforeLogin />
    </div>
  );
};
