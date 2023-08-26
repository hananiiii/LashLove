import React from 'react';
import Pictwo from '../assets/photo/pictwo.svg'
import Picthree from '../assets/photo/picthree.svg'
import Picfour from '../assets/photo/picfour.svg'

const Products = () => {
  return (
    <section className='my-24'>
        <div className='flex flex-col gap-4 text-center font-serif   justify-center '>
            <h1 className='text-dark_brown font-bold text-4xl'>Products</h1>
            <p className='text-md text-gray  flex justify-center '>
                highly recommend LashLove makeup, <br/>
                if you're in the market for a high-quality, long-lasting makeup.<br/>
                 It's definitely worth the investment, and you won't be disappointed!
            </p>

        </div>
        <div className='flex flex-col gap-12'>
        <div className='container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 lg:flex-row'>
        <div className='lg:w-[550px] md:w-1/2 w-[75%] mb-12'>
            <img src={Pictwo} className='w-full '/>

        </div>
        <div className='lg:w-[400px] lg:ml-24 sm:w-[450px] w-[350px] lg:-mt-24 text-center '>
            <h3 className='text-green lg:text-4xl text-2xl font-bold text-center mb-4'>Leniege</h3>
            <p className='text-gray font-serif  text-xl  text-center leading-8'>
               The Laneige Waterful Cushion Powder is typically a translucent setting powder that helps control shine and oil throughout the day. It's formulated to offer a smooth and soft look to the skin while helping to set makeup in place. 
            </p>
        </div>
        </div>
        <div className='container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 lg:flex-row'>
        <div className=' lg:w-[400px] sm:w-[450px] lg:ml-32 w-[350px] mb-12'>
            
            <h3 className='text-pink lg:text-4xl text-2xl font-bold text-center mb-4'>Fancy Beauty</h3>
            <p className='text-gray font-serif  text-xl  text-center leading-8'>
            Fency Beauty is a luxurious Blush brand that offers a
 range of stunning shades and finishes to suit every mood
 and occasion. Our lipsticks are made with high-quality 
ingredients, including natural plant oils and waxes, to provide
 a smooth and comfortable application that lasts for hours.
            </p>
        </div>
        <div className='lg:w-[500px] lg:ml-32  lg:-mt-24 text-center '>
        <img src={Picthree} className='w-full '/>
        </div>
        </div>
        <div className='container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 lg:flex-row'>
        <div className='lg:w-[450px] sm:w-[400px] w-[75%] mb-12'>
            <img src={Picfour} className='w-full '/>

        </div>
        <div className='lg:w-[400px] lg:ml-32 sm:w-[450px] w-[350px] lg:-mt-24 text-center '>
            <h3 className='text-brown lg:text-4xl text-2xl font-bold text-center mb-4'>Leniege Primer</h3>
            <p className='text-gray font-serif  text-xl  text-center leading-8'>
            Laneige's primer is ideal for all skin types,
 including sensitive skin, and can be used 
under any type of foundation. It helps to
extend the wear of your foundation,
keeping it in place for longer without 
settling into fine lines or creases.
            </p>
        </div>
        </div>
        </div>

    </section>
  )
}

export default Products