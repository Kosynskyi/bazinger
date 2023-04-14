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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;

  @media ${breakpoints.onlyTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
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
  cursor: pointer;

  &:hover > div {
    background-color: ${props => props.theme.colors.secondaryTitle};
  }

  &:hover > h3 {
    color: ${props => props.theme.colors.primary};
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 26px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 20px;
  color: ${props => props.theme.colors.secondaryTitle};
  text-transform: uppercase;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media ${breakpoints.onlyTablet} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 15px;
  }
`;

export const SubText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 20px;
  line-height: 1.7;
  color: rgba(131, 131, 131);
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 13px;
  }
`;
