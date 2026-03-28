import { CompanyLogo } from '@app/components/layout/CompanyLogo';
import { useAuth } from '@app/features/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Logout,
  LogoWrapper,
  NavbarContainer,
  NavLinks,
  StyledLink,
  Wrapper,
} from './Navigation.styled';
import { navigationConfig } from '../navigation.config';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <Wrapper>
      <NavbarContainer>
        <LogoWrapper>
          <CompanyLogo />
        </LogoWrapper>
        <NavLinks>
          {navigationConfig.map(({ path, label }) => (
            <StyledLink to={path} active={location.pathname === path}>
              {label}
            </StyledLink>
          ))}
        </NavLinks>
        <Logout onClick={logout}>Logout</Logout>
      </NavbarContainer>
    </Wrapper>
  );
};
