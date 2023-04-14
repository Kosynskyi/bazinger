import { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import Logo from 'components/Logo';
import UserNav from 'components/UserNav';
import {
  MobileNavigationWrapper,
  ButtonCloseMenu,
  LogoWrapper,
} from './MobileNavigation.styled';

const MobileNavigation = ({ open, setOpen }) => {
  const closeMenu = () => {
    setOpen(prev => !prev);
  };

  useEffect(() => {
    open
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'visible');
  }, [open]);

  return (
    <MobileNavigationWrapper
      style={{
        transform: open && 'translateX(0)',
        visibility: open && 'visible',
      }}
    >
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
