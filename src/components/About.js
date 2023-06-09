import React from 'react';

// countup
import CountUp from 'react-countup';
//intersection observer
import {useInView} from 'react-intersection-observer'
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../variants';

import {Link} from 'react-scroll';


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });
  return (
    <section className='section mt-20 mb-0 px-2 sm:mt-40 sm:mb-2 md:mt-40 md:mb-2 lg:mt-96 lg:mb-2 xl:mt-72 xl:mb-2' id='about'>
      <div className='container mx-auto'> 
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* image */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.01}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] 
            bg-top'>
          </motion.div>
          {/* text */} 
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.01}}
            className='flex-1'>
            <h2 className='h2 text-blue-400 text-[40px] font-secondary font-bold'>About me</h2>
            <div>
              <motion.div
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.01 }}
                className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'
              >
                📖 I am a first-year undergraduate student currently pursuing a Bachelor of Technology 
                in Computer Engineering at 
                Vellore Institute of Technology, Bhopal.
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.5)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.01 }}
                className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'
              >
                💻 With a deep passion for programming languages, 
                software development, android development, 
                and ethical hacking, I strive to continuously enhance my skills and knowledge in these areas.
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.01 }}
                className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'
              >
                🍀 Among the various languages I have explored, 
                Java and Kotlin hold a special place in my heart, 
                and I thoroughly enjoy working with them.
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.7)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.01 }}
                className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'
              >
                ✨ Additionally, I actively engage in practicing 
                Data Structures and Algorithms (DSA) with a focus 
                on utilizing the power of Java. This allows me to enhance my 
                problem-solving skills and strengthen my foundation in algorithmic thinking.              
              </motion.div>
              <motion.div
                variants={fadeIn('left', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.01 }}
                className='mb-8 max-w-lg mx-auto lg:mx-0 font-primary'
              >
                🎯 Looking ahead, my ultimate goal is to establish myself 
                as a proficient software developer. By leveraging my academic 
                pursuits and practical experiences, I am dedicated to building 
                innovative solutions and contributing to the ever-evolving field of software development.
              </motion.div>
            </div>
            {/* <p className='mb-6'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p> */}
            {/* stats
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={13} duration={3} /> : 
                    null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} /> : 
                    null}
                    k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={12} duration={3} /> : 
                    null}
                    k+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br />
                  Clients
                </div>
              </div> */
            /* </div> */}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.01 }}
              className='flex gap-x-8 items-center'>
              <Link
                to='contact'
                smooth={true}
                duration={500}
                offset={-50}>
                <button className='btn btn-sm text-[17px] bg-blue-500 hover:bg-blue-600 text-white font-tertiary font-bold py-2 px-4 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue'>Contact Me</button>
              </Link>
              <Link
                to='resume'
                smooth={true}
                duration={500}
                offset={-50}
              >
                <button className='bg-transparent text-gradient font-tertiary font-bold py-2 px-4 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl'>
                  My Resume
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
