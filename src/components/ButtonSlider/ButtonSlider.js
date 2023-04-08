import { StyledButtonSlider } from './ButtonSlider.styled';

const ButtonSlider = ({ style, onChange, children }) => {
  return (
    <StyledButtonSlider
      type="button"
      style={style}
      onClick={onChange}
      aria-label="button slider"
    >
      {children}
    </StyledButtonSlider>
  );
};

export default ButtonSlider;
