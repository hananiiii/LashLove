import React from 'react';
import Button from './Button';
import Logo from './Logo';
import Nav from './Navbar';

const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white flex justify-between shadow-md z-20 items-center px-12 '>
      <Logo />
      <Nav />
      <Button />
    </div>
  );
};

export default Header;
