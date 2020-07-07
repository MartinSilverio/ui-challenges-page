import React from 'react';
import './Directory.scss';
import { Link } from 'react-router-dom';

function Directory() {
  return (
    <ul className='directory'>
      <li className='directory-item'>
        <Link to='/ui-challenge-001-login'>
          <h3>UI Challenge 001: Login</h3>
        </Link>
      </li>
      <li className='directory-item'>
        <Link to='/ui-challenge-002-credit-card-checkout'>
          <h3>UI Challenge 002: Credit Card Checkout</h3>
        </Link>
      </li>
    </ul>
  );
}

export default Directory;
