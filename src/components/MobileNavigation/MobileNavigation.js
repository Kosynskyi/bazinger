import { GrClose } from 'react-icons/gr';
import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import {
  MobileNavigationWrapper,
  ButtonCloseMenu,
  LogoWrapper,
} from './MobileNavigation.styled';

const MobileNavigation = ({ setOpen }) => {
  const closeMenu = () => {
    setOpen(prev => !prev);
  };

  return (
    <MobileNavigationWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <UserNav closeMobileMenu={closeMenu} />
      <ButtonCloseMenu type="button" onClick={closeMenu}>
        <GrClose size="24px" />
      </ButtonCloseMenu>
    </MobileNavigationWrapper>
  );
};

export default MobileNavigation;
