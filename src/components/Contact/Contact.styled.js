import styled from 'styled-components';
import MapBackgroundImg from '../../assets/map_1x.jpg';

export const StyledSection = styled.section`
  padding-top: 108px;
  padding-bottom: 111px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${MapBackgroundImg});
  width: 100%;
  border-bottom: 1px solid rgb(255, 255, 255);
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
  width: 324px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  margin-bottom: 28px;
  /* font-family: "Lato"; */
  font-size: 36px;
  color: #ffffff;
  font-weight: 700;
`;

export const StyledInput = styled.input`
  margin-bottom: 14px;
  padding: 12px;
  width: 270px;
  border-radius: 4px;
  background-color: #ffffff;
  border: none;
  /* box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4); */

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    /* font-family: "Arial"; */
    font-size: 14px;
    color: #d3d3d3;
    text-align: center;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 12px;
  width: 270px;
  height: 146px;
  border-radius: 4px;
  background-color: #ffffff;
  border: none;
  resize: none;
  /* box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4); */

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    /* font-family: "Arial"; */
    font-size: 14px;
    color: #d3d3d3;
    text-align: center;
  }
`;

export const StyledButton = styled.button`
  padding: 18px 79px;
  width: 190px;

  border-radius: 6px;
  box-shadow: 0px 4px 0px #313032;
  background-color: #414042;
  cursor: pointer;

  /* font-family: "Lato"; */
  font-size: 15px;
  color: #72b3cc;
  font-weight: 700;
`;
