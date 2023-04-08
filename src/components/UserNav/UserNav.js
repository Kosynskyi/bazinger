import { useState } from 'react';
import { useMedia } from 'react-use';
import navigationList from 'data/dataNavigation';
import { NavList, NavItem, NavLink } from './UserNav.styled';

const UserNav = ({ closeMobileMenu }) => {
  const [active, setActive] = useState('home');
  const isNarrow = useMedia('(max-width: 768px)');
  const isTablet = useMedia('(max-width: 1199px)');

  const makeActive = name => {
    setActive(name);
    isNarrow && closeMobileMenu();
  };

  return (
    <nav>
      <NavList>
        {navigationList.map(({ id, name }) => (
          <NavItem
            key={id}
            style={{
              borderTop:
                !isNarrow && name === active && '2px solid rgb(75, 202, 255)',
              paddingTop:
                !isNarrow && name === active && (isTablet ? '28px' : '40px'),
            }}
          >
            <NavLink href={`#${name}`} onClick={() => makeActive(name)}>
              {name.toUpperCase()}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </nav>
  );
};

export default UserNav;
