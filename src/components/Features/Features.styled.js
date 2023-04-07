import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 91px;
  background-color: rgb(249, 249, 249);
  width: 100%;
`;

export const Title = styled.h2`
  /* font-family: "Lato"; */
  font-size: 25px;
  color: #414042;
  font-weight: 900;
  text-align: center;

  @media ${breakpoints.minTablet} {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  /* font-family: "Lato"; */
  margin-bottom: 67px;
  font-size: 20px;
  color: #414042;
  font-weight: 300;
  text-align: center;
`;

export const FeaturesList = styled.ul`
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 171px;
  height: 171px;
  border: 2px solid rgb(249, 249, 249);
  border-radius: 50%;
  background-color: rgb(75, 202, 255);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FeaturesItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover > div {
    background-color: rgb(65, 64, 66);
  }

  &:hover > h3 {
    color: rgb(75, 202, 255);
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
    margin: 0;
    margin-right: 69px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SubTitle = styled.h3`
  /* font-family: "Lato"; */
  margin-bottom: 26px;
  font-size: 15px;
  text-transform: uppercase;
  color: rgb(65, 64, 66);
  font-weight: 700;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SubText = styled.p`
  /* font-family: "Lato"; */
  font-size: 13px;
  line-height: 22px;
  color: #838383;
  font-weight: 400;
  text-align: center;
`;
