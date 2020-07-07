import React from 'react';
import Directory from '../../components/directory/Directory';

import './HomePage.scss';

function HomePage() {
  return (
    <div id='home-page'>
      <h2 className='home-page-title'>Directory of UI Challenges Done</h2>
      <Directory />
    </div>
  );
}

export default HomePage;
