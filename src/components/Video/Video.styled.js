import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  position: relative;
  padding-top: 60px;
  padding-bottom: 45px;
  border-bottom: 3px solid rgb(255, 255, 255);
  background-color: #2f303a;

  & > picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    object-fit: cover;
  }

  & > picture > img {
    height: 100%;
    object-fit: cover;
  }

  @media ${breakpoints.onlyTablet} {
    padding-top: 120px;
    padding-bottom: 100px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 160px;
    padding-bottom: 145px;
  }
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonPlay = styled.button`
  margin-bottom: 25px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: ${props => props.theme.borders.none};

  @media ${breakpoints.onlyTablet} {
    margin-bottom: 30px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 27px;
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    font-size: 40px;
  }

  @media ${breakpoints.desktop} {
    font-size: 48px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: ${props => props.theme.fontWeights.bold};
`;

export const Text = styled.p`
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 14px;
  color: ${props => props.theme.colors.white};

  @media ${breakpoints.onlyTablet} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 18px;
    width: 673px;
  }
`;
