import React from 'react';
//import images
import Image from '../assets/avatar.png';
//icons
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {CgPexels} from 'react-icons/cg'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

import {Link} from 'react-scroll';

const Banner = () => {

  const redirectGithub = () => {
    window.location.href = 'https://github.com/manojkp08';
  }

  const redirectLinkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/thisismanoj';
  }

  const redirectInstagram = () => {
    window.location.href = 'https://www.instagram.com/manojkumar04._';
  }

  const redirectPexels = () => {
    window.location.href = 'https://www.pexels.com/@manoj-kumar-pradhan-554382332/';
  }

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center mt-28 mb-40' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.00 }} 
              className='text-[40px] font-bold font-secondary leading-[1.2] lg:text-[90px]'>
              Manoj <span>Kumar</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.00 }}
              className='mb-5 mt-10 text-[36px] lg:text-[50px] font-secondary
            font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am</span>
              <TypeAnimation
                sequence={[
                  'A Learner',
                  3000,
                  'A Coder',
                  3000,
                  'An Android Developer',
                  3000
                ]}
                speed={50}
                className='text-accent font-secondary'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.div  
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.00 }} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link
                to='contact'
                smooth={true}
                duration={500}
                offset={-50}>
                <button className='btn btn-sm text-[17px] text-black font-bold font-tertiary py-2 px-4 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue'>Contact Me</button>
              </Link>
              <Link
                to='resume'
                smooth={true}
                duration={500}
                offset={-50}
              >
                <button className='text-gradient bg-transparent font-bold font-tertiary py-2 px-4 rounded-3xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
                  My Resume
                </button>
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.00 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a className='hover:scale-125 transition-all duration-300 transform hover:scale-105 hover:shadow-xl' onClick={redirectGithub}>
                <FaGithub />
              </a>
              <a className='hover:scale-125 transition-all duration-300 transform hover:scale-105 hover:shadow-xl' onClick={redirectLinkedin}>
                <FaLinkedin/>
              </a>
              <a className='hover:scale-125 transition-all duration-300 transform hover:scale-105 hover:shadow-xl' onClick={redirectInstagram}>
                <FaInstagram/>
              </a>
              <a className='hover:scale-125 transition-all duration-300 transform hover:scale-105 hover:shadow-xl' onClick={redirectPexels}>
                <CgPexels/>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
