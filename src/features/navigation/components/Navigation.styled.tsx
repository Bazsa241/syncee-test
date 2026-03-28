import { Button } from '@app/components/ui';
import { getColor } from '@app/styles/utils';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: flex;
  }
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layout.appWidth};
  margin: auto;
  padding: 0 1rem;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)<{ active: boolean }>`
  border-bottom: 2px solid ${({ theme, active }) => (active ? theme.colors.primary : 'transparent')};
  color: ${getColor('primary')};
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
  padding: 1rem 0.5rem;

  &:hover {
    color: ${getColor('primaryLight')};
  }
`;

export const Logout = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 14px;
`;
