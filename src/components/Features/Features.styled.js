import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 91px;
  background-color: rgb(249, 249, 249);
  width: 100%;
`;

export const Title = styled.h2`
  /* font-family: "Lato"; */
  font-size: 36px;
  color: #414042;
  font-weight: 900;
  text-align: center;
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

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
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
  margin-right: 69px;
  cursor: pointer;

  &:last-child() {
    margin-right: 0;
  }

  &:hover > div {
    background-color: rgb(65, 64, 66);
  }

  &:hover > h3 {
    color: rgb(75, 202, 255);
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
