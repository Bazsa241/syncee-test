import styled from 'styled-components';
import loginImage from '@app/assets/syncee_frontend_test_wallpaper.png';

export const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
`;

export const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  gap: 1rem;

  & h1,
  .subTitle {
    width: 100%;
  }

  h1 {
    margin-top: 2rem;
  }

  .companyLogo {
    align-self: flex-start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin-top: 2rem;
`;

export const PictureContainer = styled.div`
  background: url(${loginImage});
  background-size: cover;
`;

export const Footer = styled.div`
  padding-top: 10rem;
  width: 100%;
`;
