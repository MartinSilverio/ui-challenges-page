import React from 'react';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <header id='page-header-container'>
      {pathname === '/' ? (
        <h1>UI Challenges Directory</h1>
      ) : (
        <Link to='/' aria-label='To UI Challenges Directory'>
          <h1>← Return to Directory</h1>
        </Link>
      )}
    </header>
  );
}

export default Header;
