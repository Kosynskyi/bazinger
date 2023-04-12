import styled from 'styled-components';

export const MobileNavigationWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 40px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  pointer-events: initial;
  visibility: visible;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(100%);
`;

export const LogoWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonCloseMenu = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & > svg > path {
    stroke: ${props => props.theme.colors.primary};
  }

  &:hover > svg > path {
    stroke: rgb(75, 255, 255);
  }
`;
