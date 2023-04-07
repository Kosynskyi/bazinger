import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledHeader = styled.header`
  position: absolute;
  border-bottom: 1px solid rgb(52, 83, 109);
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
`;

export const Thumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;

  @media ${breakpoints.onlyTablet} {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ButtonBurger = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(75, 202, 255);
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: rgb(75, 255, 255);
  }
`;
