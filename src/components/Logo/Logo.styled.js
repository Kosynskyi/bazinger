import styled from 'styled-components';
import { ReactComponent as Signal } from '../../assets/signal.svg';

export const LogoWrapper = styled.div`
  position: relative;
`;

export const LogoTitle = styled.h2`
  /* display: block; */
  /* font-family: "Droid Sans"; */
  /* letter-spacing: -1px; */
  /* top: -5px; */
  font-size: 36px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.bold};
  /* outline: 1px solid black; */
`;

export const LogoSignal = styled(Signal)`
  position: absolute;
  width: 27px;
  height: 11px;
  top: -3px;
  left: 50px;
`;

export const LogoSpan = styled.span`
  color: ${props => props.theme.colors.primary};
`;
