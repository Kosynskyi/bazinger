import { useState } from 'react';
import { useMedia } from 'react-use';
import { GiHamburgerMenu } from 'react-icons/gi';
import UserNav from 'components/UserNav/UserNav';
import MobileNavigation from 'components/MobileNavigation';
import Container from 'components/Container';
import Logo from 'components/Logo';
import { StyledHeader, Thumb, ButtonBurger } from './Header.styled';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isWide = useMedia('(min-width: 768px)');

  const openBurgerMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <StyledHeader>
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
