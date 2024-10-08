'use client';

import React from 'react';
import Image from 'next/image';
import AboutImage from '../public/Media/aboutimage.jpg';
import { Spotlight } from './ui/Spotlight';

function HeroSection() {
  return (
    <div id="home" className='hero-section w-full h-auto flex flex-col md:flex-row items-center justify-evenly p-6 bg-black'>
      <Spotlight />
      <div className='hero-section-1 max-w-screen-md w-full md:w-auto flex flex-col gap-4 text-white mt-24 md:mt-0 md:mr-8 lg:mt-36'>
        <p className='font-bold text-4xl md:text-5xl lg:text-3xl mb-2 text-red-600'>Hello,</p>
        <p className='text-5xl md:text-6xl lg:text-7xl font-semibold mb-2'>I'm Aditya Bhattacharjee</p>
        <p className='text-lg md:text-xl lg:text-lg text-gray-600 leading-tight mb-4'>
          Software Developer
        </p>
        <div className="text-lg md:text-base lg:text-lg text-gray-600 leading-relaxed mb-7">
          <p>
          Hello! I’m Aditya Bhattacharjee, a dedicated Software Developer based in India with a passion for crafting seamless and engaging user interfaces. I specialize in both front-end and back-end development, ensuring a holistic approach to creating dynamic and intuitive digital experiences. Whether you need a stunning UI that captivates users or a robust backend that drives functionality, I’m here to bring your vision to life with precision and creativity. Let's build something amazing together!
          </p>
        </div>
      </div>
      <div className='hero-section-2 w-full md:w-96 h-auto rounded-full overflow-hidden'>
        <Image src={AboutImage} alt='About Image' width={800} height={800} className='object-cover' />
      </div>
    </div>
  );
}

export default HeroSection;
