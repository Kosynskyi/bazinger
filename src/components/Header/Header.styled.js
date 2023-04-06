import styled from 'styled-components';
// import { breakpoints } from 'services/mixins/mixins';

export const StyledHeader = styled.header`
  border-bottom: 1px solid rgb(52, 83, 109);
  background-color: grey;
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
  border-top: 2px solid #4bcaff;

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
  /* border-top: 2px solid #4bcaff; */
  /* outline: 1px solid green; */
  /* color: #4bcaff; - це активний колір*/
`;

// opacity: 0.302;
// width: 1480px;
// height: 100px;
// filter: drop-shadow(0px 1px 0px rgba(255,255,255,0.2));
// background-color: #070707;
