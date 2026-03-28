import styled from 'styled-components';
import loginImage from '@app/assets/syncee_frontend_test_wallpaper.png';
import { CompanyLogo } from './CompanyLogo';
import { Text } from '../ui';
import { getColor } from '@app/styles/utils';
import { PageCenter } from './PageCenter';

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  max-width: 1600px;
  flex-grow: 1;
  background: ${getColor('surface')};
`;

const FormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  gap: 1rem;
  padding-top: 4rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;

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

const PictureContainer = styled.div`
  background: url(${loginImage});
  background-size: cover;
`;

const Footer = styled.div`
  padding-top: 10rem;
  width: 100%;
`;

type AuthPageLayoutProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export const AuthPageLayout = ({ title, subtitle, children }: AuthPageLayoutProps) => {
  return (
    <PageCenter>
      <PageWrapper>
        <FormContainer>
          <CompanyLogo className="companyLogo" />
          <h1>{title}</h1>
          {subtitle && (
            <Text $variant="subtitle" className="subTitle">
              {subtitle}
            </Text>
          )}
          {children}
          <Footer>
            <Text $variant="footer">2022 Syncee, All rights reserved.</Text>
          </Footer>
        </FormContainer>
        <PictureContainer />
      </PageWrapper>
    </PageCenter>
  );
};
