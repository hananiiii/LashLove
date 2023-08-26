import React from 'react';
import Picfive from '../assets/photo/picfive.jpeg';
import Cube from '../assets/photo/cube.png';
import Best from '../assets/photo/best.jpeg';
import Hair from '../assets/photo/hair.jpeg';
import Oil from '../assets/photo/oil.jpeg';
import Massage from '../assets/photo/masssage.jpeg';

const Skincare = () => {
  const Card = [
    {
      imageSrc: Picfive,
      title: 'Leneige mask ',
      paragraph: 'sleeping mask with avocado, used as a sleeping mask',
      price: '$19.99',
    },
    {
      imageSrc: Best,
      title: 'Huxley oil ',
      paragraph: 'Full SkinCare product for oily skin used for a bright look',
      price: '$24.99',
    },
    {
      imageSrc: Cube,
      title: 'Conture cube ',
      paragraph: 'De-puff your eye bags, add radiance to your skin in seconds',
      price: '$19.99',
    },
    {
      imageSrc: Oil,
      title: 'Eye mask ',
      paragraph: 'quick fix for tired-looking eyes before a special occasion.',
      price: '$24.99',
    },
    {
      imageSrc: Massage,
      title: 'Face massage',
      paragraph: 'massage your face with the best product and have a baby-face',
      price: '$19.99',
    },
    {
      imageSrc: Hair,
      title: 'Hair protector',
      paragraph: 'Protect your hair from makeup and products',
      price: '$24.99',
    },
  ];

  return (
    <section>
      <div className='flex flex-col gap-4 text-center font-serif justify-center'>
        <h1 className='text-dark_brown font-bold text-4xl'>Skin Care</h1>
        <p className='text-md text-gray  flex justify-center'>
          By incorporating a daily skincare routine into your life,
          <br />
          you can help protect and nourish your skin for a healthy and glowing
          <br />
          complexion
        </p>
      </div>

      <div className='grid lg:grid-cols-3 px-8 py-2 sm:grid-cols-2 mt-16  grid-cols-1 gap-10 lg:mx-16 mx-10'>
        {Card.map((product, index) => (
          <div className=' border border-gray   lg:w-[400px] sm:w-full w-[350px] h-[400px] flex flex-col' key={index}>
            <img src={product.imageSrc} className='w-full h-1/2 mb-4' alt={product.title} />
            <h1 className='font-semibold px-6 text-dark_brown text-xl mb-4'>{product.title}</h1>
            <p className='font-normal px-6 text-gray text-base mb-4'>{product.paragraph}</p>
            <h3 className='text-xl px-6 text-dark_brown font-semibold'>{product.price}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skincare;
