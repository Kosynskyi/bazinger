import styled from 'styled-components';
import heroBackgroundImg from '../../assets/Layer_1x.jpg';

export const StyledSection = styled.section`
  padding-top: 249px;
  /* max-width: 1480px; */
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${heroBackgroundImg});
  border-bottom: 4px solid rgb(75, 201, 255);
`;

export const HeroWrapper = styled.div`
  margin-left: auto;
  width: 667px;
  /* outline: 1px solid green; */
`;

export const MainTitle = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Title = styled.h2`
  /* font-family: "Lato"; */
  margin-bottom: 22px;
  font-size: 48px;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  /* box-shadow: 0px 1px 1.5px rgba(25, 22, 24, 0.36); */
`;

export const TitleSpan = styled.span`
  font-weight: 700;
`;

export const Text = styled.p`
  margin-bottom: 41px;
  /* font-family: 'Lato'; */
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 430px;
  margin-bottom: 48px;
`;

export const StyledButton = styled.button`
  padding: 25px 52px;
  /* font-family: "Lato"; */
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid #ffffff;
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 0px #277697;
  }
`;

export const AvailableStoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
  width: 250px; //???????????
`;

export const AvailableText = styled.p`
  /* font-family: "Lato"; */
  font-size: 18px;
  font-weight: 300;
  color: ${props => props.theme.colors.white};
`;

export const StoreLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`;

export const StoreLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: #030303;

  &:hover > svg > path {
    fill: rgb(75, 202, 255);
  }
`;

export const ButtonSlider = styled.button`
  border-radius: 50%;
  width: 54px;
  height: 54px;
  background-color: rgba(33, 64, 83, 0.2);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: rgb(75, 202, 255);
  }

  &:hover > svg > path {
    fill: rgb(65, 64, 66);
  }
`;
