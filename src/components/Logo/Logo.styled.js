import styled from 'styled-components';
import { ReactComponent as Signal } from '../../assets/signal.svg';
import { breakpoints } from 'services/mixins/mixins';

export const LogoWrapper = styled.div`
  position: relative;
`;

export const LogoTitle = styled.h2`
  /* font-family: "Droid Sans"; */
  font-size: 36px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.bold};

  @media ${breakpoints.onlyTablet} {
    font-size: 30px;
  }
`;

export const LogoSignal = styled(Signal)`
  position: absolute;
  width: 27px;
  height: 11px;
  top: -3px;
  left: 50px;

  @media ${breakpoints.onlyTablet} {
    top: -5px;
    left: 40px;
  }
`;

export const LogoSpan = styled.span`
  color: ${props => props.theme.colors.primary};
`;
