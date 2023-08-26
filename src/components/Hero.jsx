import React from 'react'
import Pic from '../assets/photo/pic.svg'

const Hero = () => {
  return (
    <section className='pt-24'>
    <div className="container flex flex-wrap  items-center justify-center mx-auto mt-20 md:px-32 md:flex-row">
        <div className='lg:w-1/2 mb-14 lg:mb-0 '>
            <h1 className="max-w-xl mb-6 text-[2.7rem] md:leading-16 leading-[50px] text-dark_brown font-bold font-sans text-center sm:text-5xl text-3xl lg:text-left sm:leading-tight ">
              Unleash your inner beauty 
              with our makeup
              expertise.
            </h1>
          
            <p className=' text-center max-w-xl mb-8 text-gray  lg:text-left md:max-w-md lg:text-lg text-md  '>
            Discover beauty at its best on our makeup website. Explore quality products, expert tips, and unleash your inner artist.
            </p>
            <button className='md:px-16 px-12 py-4  rounded-full text-white font-bold bg-gradient-to-r from-green to-[#DBF8F4] mx-[30%] lg:mx-0 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer'>
              Watch video
            </button>
            
        </div>
        <div className="lg:w-1/2">
                  <img className="lg:ml-[100px] ml-auto md:w-[550px] md:h-[500px] w-[400px] h-[400px] rounded-lg" src={Pic} alt=""/>
               </div>
    </div>
    </section>
  )
}

export default Hero