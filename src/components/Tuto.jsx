import React from 'react';
import Tutto from '../assets/photo/tuto.svg';

const Tuto = () => {
  const Tips = [
    {
      number: '1',
      text: 'Start with a clean, moisturized face to create a smooth canvas for makeup application',
    },
    {
      number: '2',
      text: 'Use a primer before applying foundation to help it last longer and look smoother.',
    },
    {
      number: '3',
      text: 'Choose foundation that matches your skin tone and apply it evenly.',
    },
    {
      number: '4',
      text: 'Use concealer to cover dark circles, blemishes, and other imperfections.',
    },
   
  ];

  return (
    <section className='my-24'>
      <div className='flex flex-col gap-4 text-center font-serif justify-center'>
        <h1 className='text-dark_brown font-bold text-4xl'>Tutorial</h1>
        <p className='text-md text-gray flex justify-center mb-6 lg:mb-0'>
          By following this makeup tutorial, you will learn the skills and<br/> techniques needed to achieve a professional
          look and enhance your<br/> makeup application abilities.
        </p>
      </div>
      <div className='container flex flex-wrap items-center justify-center mx-auto mt-2 md:px-32 lg:flex-row'>
        <div className='mb-14 lg:mb-0 lg:w-1/2 mt-6'>
          <h1 className='font-bold sm:text-4xl lg:text-4xl text-2xl text-brown mb-10'>Hello Gorgeous!</h1>
          {Tips.map((tip, index) => (
            <div key={index} className='md:w-[600px] w-[450px] flex flex-row md:gap-16 gap-6 mb-6'>
              <div >
                <h1 className=' font-bold text-4xl px-2 py-1 text-pink'>{tip.number}</h1>
              </div>
              <p className='font-semibold text-xl text-gray text-start leading-8'>{tip.text}</p>
            </div>
          ))}
        </div>
        <div className='lg:w-1/2'>
          <img
            className='lg:ml-[150px] ml-auto md:w-[450px] md:h-[500px] w-[450px] h-[400px] rounded-lg'
            src={Tutto}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default Tuto;
