import styled from 'styled-components';
import MapBackgroundImg from '../../assets/map_1x.jpg';
import { breakpoints } from 'services/mixins/mixins';

export const StyledSection = styled.section`
  padding-top: 90px;
  padding-bottom: 100px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${MapBackgroundImg});
  width: 100%;
  border-bottom: ${props => props.theme.borders.small};
  border-color: ${props => props.theme.colors.white};

  @media ${breakpoints.desktop} {
    padding-top: 108px;
    padding-bottom: 111px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 28px 16px 28px;
  background-color: rgba(75, 202, 255, 0.8);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  width: 290px;

  @media ${breakpoints.minTablet} {
    width: 324px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 28px;
  color: ${props => props.theme.colors.white};

  @media ${breakpoints.minTablet} {
    margin-bottom: 28px;
    font-size: 36px;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 14px;
  padding: 12px;
  width: 240px;
  border-radius: ${props => props.theme.radii.secondary};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.none};

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    font-family: ${props => props.theme.fonts.arial};
    font-size: 14px;
    color: ${props => props.theme.colors.placeholder};
    text-align: center;
  }

  @media ${breakpoints.minTablet} {
    width: 270px;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 12px;
  width: 240px;
  height: 146px;
  border-radius: ${props => props.theme.radii.secondary};
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.borders.none};
  resize: none;

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    font-family: ${props => props.theme.fonts.arial};
    font-size: 14px;
    color: ${props => props.theme.colors.placeholder};
    text-align: center;
  }

  @media ${breakpoints.minTablet} {
    width: 270px;
  }
`;

export const StyledButton = styled.button`
  padding: 12px 79px;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 4px 0px #313032;
  background-color: ${props => props.theme.colors.secondaryTitle};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 15px;
  color: #72b3cc;
  cursor: pointer;

  @media ${breakpoints.minTablet} {
    padding: 18px 79px;
    width: 190px;
  }
`;
