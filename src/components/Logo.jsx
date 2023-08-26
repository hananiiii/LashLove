import React from 'react'
import Logoo from '../assets/photo/logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
        <Link to ="/Home"><img src={Logoo} className='w-[75%] mt-4 cursor-pointer'/></Link>
    </div>
  )
}

export default Logo