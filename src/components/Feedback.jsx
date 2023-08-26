import React from 'react';
import Avatar1 from '../assets/photo/avatar1.svg';
import Avatar2 from '../assets/photo/avatar2.svg';
import Avatar3 from '../assets/photo/avatar3.svg';
import Question from './Footer';

const Feedback = () => {
  const feed = [
    {
        img: Avatar1,
        name: 'Maria John',
        text: '“I recently purchased this product and I\'m so glad I did! The quality is amazing”',
        rating: 5,
      },
      {
        img: Avatar2,
        name: 'Smith Jackson',
        text: '“I recently purchased this product and I\'m so glad I did! The quality is amazing”',
        rating: 4,
      },
      {
        img: Avatar3,
        name: 'Sara May',
        text: '“I recently purchased this product and I\'m so glad I did! The quality is amazing”',
        rating: 5,
      },
  ];

  return (
    <section className='my-24'>
      <div className='flex flex-col gap-4 text-center font-serif justify-center'>
        <h1 className='text-dark_brown font-bold text-4xl'>Feedback</h1>
        <p className='text-md text-gray flex justify-center mb-6 lg:mb-0'>
          Hear what our customers have to say about their experience with our products.
        </p>
      </div>
      <div className='mt-2'>
        <div className='sm:w-[650px] w-[400px] lg:w-[1000px] lg:gap-12 gap-6 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-24 lg:mx-64 sm:mx-12 mx-12  items-center'>
          {feed.map((feedback, index) => (
            <div className='w-full h-auto  border border-gray rounded-lg px-5 py-5 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer' key={index}>
              <div className='flex flex-row gap-4'>
                <img src={feedback.img} alt='' className='mb-8' />
                <h1 className='text-xl text-brown font-semibold items-center mt-4 mb-6 '>{feedback.name}</h1>
              </div>
              <p className='text-normal text-gray font-serif w-[250px] mb-6'>{feedback.text}</p>
              <div className='flex flex-row gap-2 text-xl text-yellow-500'>
                {Array.from({ length: feedback.rating }).map((_, starIndex) => (
                  <span key={starIndex}>
                    <ion-icon name="star"></ion-icon>
                  </span>
                ))}
              </div>
            </div>
          ))}
          </div>
          </div>
    </section>
  );
}

export default Feedback;
