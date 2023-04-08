import { useState, useEffect } from 'react';
import { useMedia } from 'react-use';
import { GiHamburgerMenu } from 'react-icons/gi';
import UserNav from 'components/UserNav/UserNav';
import MobileNavigation from 'components/MobileNavigation';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { StyledHeader, Thumb, ButtonBurger } from './Header.styled';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [opacityHeader, setOpacityHeader] = useState(false);
  const isWide = useMedia('(min-width: 768px)');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setOpacityHeader(true);
      } else {
        setOpacityHeader(false);
      }
    });
  }, []);

  const openBurgerMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <StyledHeader
      style={{
        position: isWide ? 'fixed' : 'absolute',
        backgroundColor:
          isWide && opacityHeader ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container>
        {isWide ? (
          <Thumb>
            <Logo />
            <UserNav />
          </Thumb>
        ) : (
          <Thumb>
            <Logo />
            <ButtonBurger type="button" onClick={() => openBurgerMenu()}>
              <GiHamburgerMenu size="24px" />
            </ButtonBurger>
            {menuOpen && <MobileNavigation setOpen={setMenuOpen} />}
          </Thumb>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
