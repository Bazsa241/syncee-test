import { CompanyLogo } from '@app/components/layout/CompanyLogo';
import { useAuth } from '@app/features/auth';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LogoWrapper, NavbarContainer, NavLinks, StyledLink, Wrapper } from './Navigation.styled';
import { navigationConfig } from '../navigation.config';
import { Button } from '@app/components/ui';

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
            <StyledLink key={path} to={path} active={location.pathname === path}>
              {label}
            </StyledLink>
          ))}
        </NavLinks>
        <Button onClick={logout} size="sm">
          Logout
        </Button>
      </NavbarContainer>
    </Wrapper>
  );
};
