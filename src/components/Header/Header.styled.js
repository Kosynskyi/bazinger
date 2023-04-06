import styled from 'styled-components';
// import { breakpoints } from 'services/mixins/mixins';

export const StyledHeader = styled.header`
  position: absolute;
  border-bottom: 1px solid rgb(52, 83, 109);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%; ;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const NavItem = styled.li`
  margin-right: 35px;
  padding-top: 44px;
  padding-bottom: 47px;
  /* border-top: 2px solid rgb(75, 202, 255); */

  &:last-child {
    margin-right: 0;
  }
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled.a`
  /* font-family: 'Droid Sans'; */
  padding-top: 44px;
  padding-bottom: 47px;
  font-size: 13px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.white};

  &::before {
    position: absolute;
    top: -3px;
    content: '';
    display: flex;
    width: 100%;
    height: 2px;
    background-color: rgb(75, 202, 255);
  }
`;

// opacity: 0.302;
// width: 1480px;
// height: 100px;
// filter: drop-shadow(0px 1px 0px rgba(255,255,255,0.2));
// background-color: #070707;
