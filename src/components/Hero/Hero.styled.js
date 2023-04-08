import styled from 'styled-components';
import heroBackgroundImg from '../../assets/Layer_1x.jpg';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 100px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${heroBackgroundImg});

  @media ${breakpoints.onlyTablet} {
    padding-top: 150px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 349px;
  }
`;

export const HeroWrapper = styled.div`
  margin-left: auto;
  padding-bottom: 40px;

  @media ${breakpoints.onlyTablet} {
    width: 450px;
  }

  @media ${breakpoints.desktop} {
    padding-bottom: 80px;
    width: 673px;
  }
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
  margin-bottom: 12px;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 20px;
  color: ${props => props.theme.colors.white};

  @media ${breakpoints.onlyTablet} {
    font-weight: ${props => props.theme.fontWeights.light};
    font-size: 32px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 22px;
    font-weight: ${props => props.theme.fontWeights.light};
    font-size: 48px;
  }
`;

export const TitleSpan = styled.span`
  font-weight: ${props => props.theme.fontWeights.medium};

  @media ${breakpoints.desktop} {
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

export const Text = styled.p`
  margin-bottom: 28px;
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 16px;
  color: ${props => props.theme.colors.white};

  @media ${breakpoints.onlyTablet} {
    margin-bottom: 36px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 41px;
    font-size: 18px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 36px;

  @media ${breakpoints.onlyTablet} {
    justify-content: space-between;
    width: 100%;
  }

  @media ${breakpoints.desktop} {
    justify-content: space-between;
    margin-bottom: 48px;
    width: 430px;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 12px;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  border-radius: ${props => props.theme.radii.primary};
  border: ${props => props.theme.borders.primary};
  border-color: ${props => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 4px 0px #277697;
  }

  @media ${breakpoints.minTablet} {
    padding: 20px 44px;
    font-size: 15px;
  }

  @media ${breakpoints.desktop} {
    padding: 25px 52px;
    font-size: 15px;
  }
`;

export const AvailableStoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;

export const AvailableText = styled.p`
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 18px;
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
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.backgroundIcons};

  &:hover > svg > path {
    fill: ${props => props.theme.colors.primary};
  }
`;

export const ButtonSliderLeft = styled.button`
  position: absolute;
  top: 140px;
  left: -55px;
  border-radius: ${props => props.theme.radii.round};
  width: 54px;
  height: 54px;
  background-color: rgb(33, 65, 84);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  &:hover > svg > path {
    fill: ${props => props.theme.colors.secondaryTitle};
  }

  @media ${breakpoints.minTablet} {
    top: 105px;
    left: -55px;
  }

  @media ${breakpoints.desktop} {
    top: 45px;
    left: -85px;
  }
`;

export const ButtonSliderRight = styled.button`
  position: absolute;
  top: 140px;
  right: -55px;
  border-radius: ${props => props.theme.radii.round};
  width: 54px;
  height: 54px;
  background-color: rgb(33, 65, 84);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  &:hover > svg > path {
    fill: ${props => props.theme.colors.secondaryTitle};
  }

  @media ${breakpoints.minTablet} {
    top: 105px;
    right: -55px;
  }

  @media ${breakpoints.desktop} {
    top: 45px;
    right: -85px;
  }
`;

export const SlideIndicatorList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 18px;
`;

export const SlideIndicatorItem = styled.li`
  margin-right: 11px;

  &:last-child {
    margin-right: 0;
  }
`;

export const SlideIndicator = styled.button`
  width: 15px;
  height: 15px;
  border: ${props => props.theme.borders.small};
  border-color: ${props => props.theme.colors.white};
  background-color: transparent;
  border-radius: ${props => props.theme.radii.round};
  cursor: pointer;
`;
