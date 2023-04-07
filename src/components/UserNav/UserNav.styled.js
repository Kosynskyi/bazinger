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

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${breakpoints.desktop} {
    margin-right: 35px;
    padding-top: 44px;
    padding-bottom: 47px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const NavLink = styled.a`
  /* font-family: 'Droid Sans'; */
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    color: rgb(75, 255, 255);
  }

  @media ${breakpoints.minTablet} {
    padding-top: 30px;
    padding-bottom: 30px;
    font-weight: 500;

    &::before {
      position: absolute;
      top: -3px;
      content: '';
      display: flex;
      width: 100%;
      height: 2px;
      background-color: rgb(75, 202, 255);
    }
  }

  @media ${breakpoints.desktop} {
    padding-top: 44px;
    padding-bottom: 47px;
  }
`;
