import styled from 'styled-components';
import { ReactComponent as AddScreenShot } from '../../assets/add-icon.svg';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 107px;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

export const Title = styled.h2`
  /* font-family: "Lato"; */
  font-size: 36px;
  color: rgb(65, 64, 66);
  font-weight: 900;
  text-align: center;
`;

export const Text = styled.p`
  /* font-family: "Lato"; */
  margin-bottom: 67px;
  font-size: 20px;
  color: rgb(65, 64, 66);
  font-weight: 300;
  text-align: center;
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

export const GalleryItem = styled.li`
  width: 270px;
`;

export const GalletySubTitle = styled.h3`
  /* font-family: "Lato"; */
  position: absolute;
  bottom: 10px;
  width: 100%;
  font-size: 15px;
  text-transform: uppercase;
  color: rgb(75, 202, 255);
  font-weight: 700;
  text-align: center;
`;

export const SubText = styled.p`
  /* font-family: "Lato"; */
  font-size: 13px;
  line-height: 22px;
  color: rgb(131, 131, 131);
  font-weight: 400;
  text-align: center;

  /* position: absolute;
    bottom: 0px;
    width: 100%; */
`;

export const Picture = styled.picture`
  /* position: relative; */
`;

export const PictureWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

export const SubTextWrapper = styled.div`
  padding-left: 23px;
  padding-right: 23px;
`;

export const ButtonAdd = styled.button`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconAdd = styled(AddScreenShot)`
  /* width: 20px;
  height: 20px; */
`;
