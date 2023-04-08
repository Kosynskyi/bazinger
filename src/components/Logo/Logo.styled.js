import styled from 'styled-components';
import { ReactComponent as Signal } from '../../assets/signal.svg';
import { breakpoints } from 'services/mixins/mixins';

export const LogoWrapper = styled.div`
  position: relative;
`;

export const LogoTitle = styled.h2`
  font-family: ${props => props.theme.fonts.droidSans};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 36px;
  color: ${props => props.theme.colors.white};

  @media ${breakpoints.onlyTablet} {
    font-size: 30px;
  }
`;

export const LogoSignal = styled(Signal)`
  position: absolute;
  width: 27px;
  height: 11px;
  top: -8px;
  left: 51px;

  @media ${breakpoints.onlyTablet} {
    top: -8px;
    left: 40px;
  }
`;

export const LogoSpan = styled.span`
  color: ${props => props.theme.colors.primary};
`;
