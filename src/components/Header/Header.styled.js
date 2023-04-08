import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledHeader = styled.header`
  border-bottom: ${props => props.theme.borders.small};
  border-color: ${props => props.theme.colors.borderBottomHeader};
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  z-index: 100;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 10px;

  @media ${breakpoints.onlyTablet} {
    padding-top: 0;
    padding-bottom: 0;
  }

  @media ${breakpoints.desktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ButtonBurger = styled.button`
  border: ${props => props.theme.borders.none};
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(75, 255, 255);
  }
`;
