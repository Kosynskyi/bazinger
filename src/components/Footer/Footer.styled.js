import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.secondaryTitle};
  width: 100%;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints.maxMobile} {
    height: 40px;
  }

  @media ${breakpoints.minTablet} {
    flex-direction: row;
  }
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 12px;
  color: ${props => props.theme.colors.white};
  opacity: 0.251;
`;
