"use client";
import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';

function Navbar() {
  return (
    <nav className='bg-black h-20 py-2 px-5 flex justify-between items-center'>
        <Image className='rounded-4xl ml-2 mr-12' src="/logo.jpeg" width={70} height={70} alt="Logo"></Image>
        <h1 className='text-blue-400'>Issues</h1>
        <h1 className='text-blue-400'>Events</h1>
        <h1 className='text-blue-400'>Feedback</h1>
        <h1 className='text-blue-400'>Contact</h1>
        <h1 className='text-blue-400 mr-6'>About Us</h1>

        <Button className='bg-white text-blue-600' variant="outline">Sign In</Button>
        <Button className='bg-blue-600 hover:bg-blue-800 text-white'>Register</Button>
    </nav>
  )
}

export default Navbar