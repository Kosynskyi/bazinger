import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;

  @media ${breakpoints.onlyTablet} {
    margin-right: 12px;
    padding-top: 30px;
    padding-bottom: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${breakpoints.desktop} {
    margin-right: 35px;
    padding-top: 42px;
    padding-bottom: 47px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NavLink = styled.a`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: ${props => props.theme.fonts.droidSans};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 13px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    color: rgb(75, 255, 255);
  }

  @media ${breakpoints.minTablet} {
    padding-top: 30px;
    padding-bottom: 30px;
    font-weight: ${props => props.theme.fontWeights.medium};
  }

  @media ${breakpoints.desktop} {
    padding-top: 42px;
    padding-bottom: 47px;
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;
