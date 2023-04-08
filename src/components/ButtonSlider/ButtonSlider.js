import { StyledButtonSlider } from './ButtonSlider.styled';

const ButtonSlider = ({ style, onChange, children }) => {
  return (
    <StyledButtonSlider type="button" style={style} onClick={onChange}>
      {children}
    </StyledButtonSlider>
  );
};

export default ButtonSlider;
