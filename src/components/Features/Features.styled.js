import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 91px;
  background-color: ${props => props.theme.colors.backgroundWhite};
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: ${props => props.theme.fontWeights.black};
  font-size: 25px;
  color: ${props => props.theme.colors.secondaryTitle};
  text-align: center;

  @media ${breakpoints.minTablet} {
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-bottom: 67px;
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 20px;
  color: ${props => props.theme.colors.secondaryTitle};
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
  border: ${props => props.theme.borders.primary};
  border-color: ${props => props.theme.colors.backgroundWhite};
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.theme.colors.primary};
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
    background-color: ${props => props.theme.colors.secondaryTitle};
  }

  &:hover > h3 {
    color: ${props => props.theme.colors.primary};
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
  margin-bottom: 26px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 15px;
  color: ${props => props.theme.colors.secondaryTitle};
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SubText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 13px;
  line-height: 1.7;
  color: rgba(131, 131, 131);
  text-align: center;
`;
