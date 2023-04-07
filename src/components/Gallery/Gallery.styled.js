import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 107px;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

export const Title = styled.h2`
  /* font-family: "Lato"; */
  font-size: 25px;
  color: rgb(65, 64, 66);
  font-weight: 900;
  text-align: center;

  @media ${breakpoints.minTablet} {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  /* font-family: "Lato"; */
  margin-bottom: 27px;
  font-size: 20px;
  color: rgb(65, 64, 66);
  font-weight: 300;
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    margin-bottom: 47px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 67px;
  }
`;

export const GalleryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${breakpoints.onlyTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

export const GalleryItem = styled.li`
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${breakpoints.onlyTablet} {
    margin: 0;
    margin-bottom: 40px;
    width: 40%;

    &:nth-last-child(-n + 2) {
      margin-bottom: 0;
    }
  }

  @media ${breakpoints.desktop} {
    width: 270px;
    margin: 0;

    &:last-child {
      margin-right: 0;
    }
  }
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
  line-height: 1.7;
  color: rgb(131, 131, 131);
  font-weight: 400;
  text-align: center;
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
