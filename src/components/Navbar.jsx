import React from 'react'

const Navbar = () => {
  return (
    <div >
        <ul className=' lg:flex sm:flex hidden flex-row gap-12 text-[#473B3B] font-serif text-lg cursor-pointer '>
            <li className='underline hover:text-pink'>Products</li>
            <li className='underline hover:text-brown'>Skin care</li>
            <li className='underline hover:text-green'>Tutorials</li>
            <li className='underline hover:text-gray'>Q&A</li>
        </ul>
    </div>
  )
}

export default Navbar