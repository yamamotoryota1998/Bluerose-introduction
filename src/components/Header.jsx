import React from 'react';
import Sidebar from './Sidebar';

function Header() {
    return (
      <div>
        <div className='header-wrapper'>
          <Sidebar />
          <h1>Hello, World!</h1>
        </div>
      </div>
    );
  }
  export default Header;