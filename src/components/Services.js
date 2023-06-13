import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../variants'

//services data
const services = [
  {
    name: 'Android Development',
    description: 'I am learning Android Development using Kotlin programming language. (I use XML and Jetpack Compose to design the User Interface(UI))',
    // link: 'Learn more',
  },
  {
    name: 'Practicing DSA',
    description: 'I am practicing Data Structures & Algorithms in Java programming language.',
    // link: 'Learn more',
  },
  // {
  //   name: 'Digital Marketing',
  //   description: 'Add your own ',
  //   link: 'Learn more',
  // },
  // {
  //   name: 'Production Branding',
  //   description: 'Add your own ',
  //   link: 'Learn more',
  // }
]


const Services = () => {

  const handelRedirect = () => {
    window.location.href = 'https://github.com/manojkp08';
  }

  return (
    <section className='section mt-40 sm:py-4 md:py-6 px-2 lg:py-8 xl:py-10 sm:mt-40 sm:mb-2 md:mt-72 md:mb-2 lg:mt-60 lg:mb-1 xl:mt-72 xl:mb-2' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.01}} 
            className='flex-1 lg:bg-bottom px-5 bg-no-repeat mb-12 lg:mb-0'>
            <h2 className='h2 text-yellow-400 text-[40px] font-secondary font-bold mb-6'>What I Do</h2>
            <h3 className='h3 max-w-[455px] mb-16 font-secondary font-extralight'>
              I am a coder and beginner Android Developer who is currently improving himself in this field.
            </h3>
            <button 
              onClick={handelRedirect}
              className='btn btn-sm bg-blue-500 hover:bg-blue-600
              text-black text-[17px] font-tertiary font-bold py-2 px-4 rounded-3xl shadow-md 
              transition-all duration-300 transform hover:scale-105 
              hover:shadow-xl hover:ring-2 hover:ring-blue'>
                Github Profile
            </button>
          </motion.div>
          {/* services */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.01}} 
            className='flex-1'>
            {/* service list */}
            <div>
              {services.map((service, index)=> {
                //destructure service
                const {name, description} = service;
                return (
                  <div 
                    className='border-b border-white/20 h-[146px] mb-[38px] 
                    flex' 
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-secondary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-primary leading-tight'>
                        {description}
                      </p>
                    </div>
                    {/* <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
