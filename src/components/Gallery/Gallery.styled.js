import styled from 'styled-components';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 50px;
  padding-bottom: 107px;
  background-color: ${props => props.theme.colors.white};
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
  margin-bottom: 27px;
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 20px;
  color: ${props => props.theme.colors.secondaryTitle};
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    margin-bottom: 47px;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: 67px;
  }
`;

export const GalleryList = styled.ul`
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

export const GalleryItem = styled.li``;

export const GallerySubTitle = styled.h3`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 15px;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`;

export const SubText = styled.p`
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: 20px;
  color: rgb(131, 131, 131);
  line-height: 1.7;
  text-align: center;

  @media ${breakpoints.onlyTablet} {
    font-size: 18px;
  }

  @media ${breakpoints.desktop} {
    font-size: 13px;
  }
`;

export const PictureWrapper = styled.div`
  position: relative;
  margin-bottom: 24px;

  & > picture > span {
    width: 100%;
  }
`;

export const SubTextWrapper = styled.div`
  padding-left: 23px;
  padding-right: 23px;
`;

export const ButtonAdd = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: ${props => props.theme.borders.none};
  cursor: pointer;
`;
