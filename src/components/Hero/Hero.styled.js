import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  position: relative;
  padding-top: 100px;
  background-color: #2f303a;

  & > picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  & > picture > img {
    height: 100%;
    object-fit: cover;
  }

  @media ${breakpoints.onlyTablet} {
    padding-top: 150px;
  }

  @media ${breakpoints.desktop} {
    padding-top: 349px;
  }
`;

export const HeroWrapper = styled.div`
  margin-left: auto;
  padding-bottom: 30px;
  max-width: 400px;

  @media ${breakpoints.onlyTablet} {
    padding-bottom: 40px;
    max-width: 550px;
  }

  @media ${breakpoints.desktop} {
    padding-bottom: 80px;
    max-width: 673px;
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
  margin-bottom: 36px;

  & > button:first-child {
    margin-right: 15px;
  }

  @media ${breakpoints.onlyTablet} {
    width: 100%;
  }

  @media ${breakpoints.desktop} {
    justify-content: space-between;
    margin-bottom: 48px;
    width: 430px;

    & > button {
      margin-right: 0;
    }
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

export const ButtonSliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  width: 150px;
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
