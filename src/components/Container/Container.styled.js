import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const ContainerWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 320px;
  /* outline: 1px solid yellow; */

  @media ${breakpoints.onlyTablet} {
    width: 768px;
    /* outline: 1px solid yellow; */
  }

  @media ${breakpoints.desktop} {
    width: 1200px;
    /* outline: 1px solid yellow; */
  }
`;
