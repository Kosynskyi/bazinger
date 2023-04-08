import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledButtonSlider = styled.button`
  border-radius: ${props => props.theme.radii.round};
  width: 54px;
  height: 54px;
  background-color: rgb(33, 65, 84);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  &:hover > svg > path {
    fill: ${props => props.theme.colors.secondaryTitle};
  }

  @media ${breakpoints.minTablet} {
    top: 105px;
    right: -55px;
  }

  @media ${breakpoints.desktop} {
    top: 45px;
    right: -85px;
  }
`;
