import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledFooter = styled.footer`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: rgb(65, 64, 66);
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
  /* font-family: 'Lato'; */
  font-size: 12px;
  color: #ffffff;
  font-weight: 400;
  opacity: 0.251;
`;
