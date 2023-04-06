import { useState } from 'react';

import Container from 'components/Container';
import Logo from 'components/Logo';
import {
  StyledHeader,
  NavList,
  NavItem,
  NavLink,
  Thumb,
} from './Header.styled';

const Header = () => {
  const [active, setActive] = useState('home');

  const navigationList = [
    { id: 1, name: 'home' },
    { id: 2, name: 'features' },
    { id: 3, name: 'gallery' },
    { id: 4, name: 'video' },
    { id: 5, name: 'prices' },
    { id: 6, name: 'testimonials' },
    { id: 7, name: 'download' },
    { id: 8, name: 'contact' },
  ];

  const makeActive = e => {
    setActive(e.target.textContent.toLowerCase());
  };

  return (
    <StyledHeader>
      <Container>
        <Thumb>
          <Logo />
          <nav>
            <NavList>
              {navigationList.map(({ id, name }) => (
                <NavItem key={id}>
                  <NavLink
                    href={`#${name}`}
                    style={{
                      position: name === active && 'relative',
                    }}
                    onClick={makeActive}
                  >
                    {name.toUpperCase()}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </nav>
        </Thumb>
      </Container>
    </StyledHeader>
  );
};

export default Header;
