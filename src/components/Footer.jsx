import React from 'react';

const Footer = () => {
  return (
    <section className='bg-gray text-black py-6'>
      <div className='container mx-auto flex flex-col lg:flex-row  px-8 justify-between items-center'>
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <div className='mt-4 lg:mt-0'>
          <a href='#' className='text-black mx-2 text-xl hover:text-gray-400'>
            <ion-icon name='logo-facebook'></ion-icon>
          </a>
          <a href='#' className='text-black mx-2  text-xl  hover:text-gray-400'>
            <ion-icon name='logo-twitter'></ion-icon>
          </a>
          <a href='#' className='text-black mx-2  text-xl  hover:text-gray-400'>
            <ion-icon name='logo-instagram'></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
