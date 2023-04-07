import { useState } from 'react';
import { useMedia } from 'react-use';
import navigationList from 'data/dataNavigation';
import { NavList, NavItem, NavLink } from './UserNav.styled';

const UserNav = ({ closeMobileMenu }) => {
  const [active, setActive] = useState('home');
  const isNarrow = useMedia('(max-width: 768px)');

  const makeActive = name => {
    setActive(name);

    isNarrow && closeMobileMenu();
  };

  return (
    <nav>
      <NavList>
        {navigationList.map(({ id, name }) => (
          <NavItem key={id}>
            <NavLink
              href={`#${name}`}
              style={{
                position: name === active && 'relative',
              }}
              onClick={() => makeActive(name)}
            >
              {name.toUpperCase()}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

export default UserNav;
