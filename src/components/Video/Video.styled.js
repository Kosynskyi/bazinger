import styled from 'styled-components';
import VideoBackgroundImg from '../../assets/background_video_1x.jpg';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 60px;
  padding-bottom: 45px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${VideoBackgroundImg});
  width: 100%;
  border-bottom: 3px solid rgb(255, 255, 255);

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
  border: none;

  @media ${breakpoints.onlyTablet} {
    margin-bottom: 30px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 27px;
  /* font-family: 'Lato'; */
  font-size: 24px;
  color: #ffffff;
  font-weight: 300;
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    font-size: 40px;
  }

  @media ${breakpoints.desktop} {
    font-size: 48px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  /* font-family: 'Lato'; */
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;

  @media ${breakpoints.onlyTablet} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 18px;
    width: 673px;
  }
`;
