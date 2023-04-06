import styled from 'styled-components';
import VideoBackgroundImg from '../../assets/background_video_1x.jpg';

export const StyledSection = styled.section`
  padding-top: 160px;
  padding-bottom: 145px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${VideoBackgroundImg});
  /* background-color: rgb(255, 255, 255); */
  width: 100%;
  border-bottom: 3px solid rgb(255, 255, 255);
`;

export const VideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonPlay = styled.button`
  margin-bottom: 40px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Title = styled.h2`
  margin-bottom: 27px;
  /* font-family: 'Lato'; */
  font-size: 48px;
  color: #ffffff;
  font-weight: 300;
  boxshadow: 0px 1px 1.5px rgba(25, 22, 24, 0.36);
`;

export const TitleSpan = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  /* font-family: 'Lato'; */
  width: 673px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 300;
`;
