import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//img
import ImgKotlinChatApp from '../assets/Img1.png';
import Imgdoge from '../assets/Imgdogememe.png';
import ImgNotesApp from '../assets/Img3.png';
import ImgAmoledWallpaper from '../assets/Img2.png';



const Work = () => {

  const handelRedirect = () => {
    window.location.href = 'https://github.com/manojkp08?tab=repositories';
  }

  return (
    <section className='section sm:py-4 mt-40 md:py-6 lg:py-8 xl:p-5 sm:mt-40 px-0 py-0 sm:mb-2 md:mt-40 md:mb-2 lg:mt-0 lg:mb-2 xl:mt-10 xl:mb-2' id='work'>
      <div className='container mx-auto'>
        <div
          className='grid gap-5 bg-no-repeat lg:flex-row flex-col grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 px-5 py-5'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }}
            className='flex-1 flex flex-col gap-y-10 mt-1 mb-1 lg:mb-0 lg:col-start-1 lg:col-end-2'>
            {/* text */}
            <div
              className='grid gap-5 bg-no-repeat lg:flex-row flex-col px-5 py-5'>
              <h2 className='h2 leading-tight text-[40px] text-yellow-400 font-bold font-secondary'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16 font-primary'>
                Here are some of my Android Development projects.
                To view all, visit my github profile.
              </p>
              <button 
                onClick={handelRedirect}
                className='h-11 w-64 btn btn-sm text-[17px] text-black 
                font-bold font-tertiary py-2 px-2 rounded-3xl shadow-md 
                transition-all duration-300 transform 
                hover:scale-105 hover:shadow-xl hover:ring-2 
                hover:ring-blue'>
                View all projects
              </button>
            </div>
          </motion.div>
          <div className='flex-1 flex flex-col gap-y-10 mt-1 mb-1 lg:mb-0 lg:col-start-2 lg:col-end-3'>
            {/* image */}
            <motion.div 
              variants={fadeIn('right', 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.01 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-3 gap-y-5'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500 object-center object-cover sm:object-cover sm:object-center md:object-cover md:object-center lg:object-cover lg:object-center xl:object-cover xl:object-center'
                src={ImgAmoledWallpaper}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-7 left-3 sm:group-hover:bottom-28 sm:left-10 md:left-20 md:group-hover:bottom-36 xl:left-10 lg:left-5 xl:group-hover:bottom-12 lg:group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-gradient'>A wallpaper app made using Koltin and Firebase.</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-3 group-hover:top-3 sm:group-hover:top-20 sm:left-10 md:left-20 md:group-hover:top-28 xl:left-10 lg:left-5 xl:group-hover:top-7 lg:group-hover:top-3 transition-all mt-5 duration-700 z-50'>
                <span className='text-3xl text-white'>Amoled Wallpaper</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.01 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-3 gap-y-5'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500 object-center object-cover sm:object-cover sm:object-center md:object-cover md:object-center lg:object-cover lg:object-center xl:object-cover xl:object-center'
                src={ImgNotesApp}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-3 left-4 sm:group-hover:bottom-28 sm:left-10 md:left-20 md:group-hover:bottom-36 xl:left-10 lg:left-5 xl:group-hover:bottom-6 lg:group-hover:bottom-2 transition-all duration-500 z-50'>
                <span className='text-gradient'>A notes app made using Koltin, Room Database and MVVM architecture.</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-4 group-hover:top-1 sm:group-hover:top-20 sm:left-10 md:left-20 md:group-hover:top-28 xl:left-10 lg:left-5 xl:group-hover:top-6 lg:group-hover:top-1 transition-all mt-5 duration-700 z-50'>
                <span className='text-3xl text-white'>Notes App</span>
              </div>
            </motion.div>

          </div>
          <div
            className='flex-1 flex flex-col gap-y-10 mt-1 mb-1 lg:mb-0 lg:col-start-3 lg:col-end-4'>
            {/* image */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.01 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-3 gap-y-5'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500 object-center object-cover sm:object-cover sm:object-center md:object-cover md:object-center lg:object-cover lg:object-center xl:object-cover xl:object-center'
                src={ImgKotlinChatApp}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-7 left-3 sm:group-hover:bottom-28 sm:left-10 md:left-20 md:group-hover:bottom-36 xl:left-10 lg:left-5 xl:group-hover:bottom-12 lg:group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-gradient'>A chat app using Koltin and Firebase.</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-3 group-hover:top-3 sm:group-hover:top-20 sm:left-10 md:left-20 md:group-hover:top-28 xl:left-10 lg:left-5 xl:group-hover:top-7 lg:group-hover:top-3 transition-all mt-5 duration-700 z-50'>
                <span className='text-3xl text-white'>Koltin Chat App</span>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.01 }}
              className='group relative overflow-hidden border-2 border-white/50 rounded-xl mt-3 gap-y-5'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='group-hover:scale-125 transition-all duration-500 object-center object-cover sm:object-cover sm:object-center md:object-cover md:object-center lg:object-cover lg:object-center xl:object-cover xl:object-center'
                src={Imgdoge}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full group-hover:bottom-7 left-4 sm:group-hover:bottom-28 sm:left-10 md:left-20 md:group-hover:bottom-36 xl:left-10 lg:left-5 xl:group-hover:bottom-12 lg:group-hover:bottom-6 transition-all duration-500 z-50'>
                <span className='text-gradient'>A meme app made using Koltin and MemeAPI.</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-4 group-hover:top-3 sm:group-hover:top-20 sm:left-10 md:left-20 md:group-hover:top-28 xl:left-10 lg:left-5 xl:group-hover:top-7 lg:group-hover:top-3 transition-all mt-5 duration-700 z-50'>
                <span className='text-3xl text-white'>Meme App</span>
              </div>
            </motion.div>




          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
