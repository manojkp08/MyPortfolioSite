import React from 'react';
//motion
import {motion} from 'framer-motion';
//variants
import {fadeIn} from '../variants';
//Firebase firestore
import {useState} from 'react';
import db from '../firebase';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new document in the 'contacts' collection
    db.collection('contacts')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        console.log('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };


  return (
    <section className='py-16 sm:py-4 md:py-6 mt-40 lg:py-8 xl:py-10 lg:section sm:mt-72 sm:mb-2 md:mt-72 md:mb-2 lg:mt-10 lg:mb-2 xl:mt-30 xl:mb-2' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }} 
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-[30px] text-accent font-secondary font-bold mb-2
              tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 font-secondary font-semibold'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* from */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.01 }} 
            onSubmit={handleSubmit}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white placeholder:font-secondary placeholder:font-extralight focus:border-accent transition-all font-secondary font-extralight focus:font-secondary focus:font-extralight' 
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Your name'            
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white placeholder:font-secondary placeholder:font-extralight focus:border-accent transition-all font-primary font-extralight focus:font-primary focus:font-extralight' 
              type='text'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your email'            
            />
            <input 
              className='bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white placeholder:font-secondary placeholder:font-extralight font-primary focus:border-accent font-extralight focus:font-primary focus:font-extralight transition-all resize-none'
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Your Message'
            ></input>
            <button
              className='btn btn-sm text-[17px] bg-blue-500 hover:bg-blue-600 text-white font-bold font-tertiary py-2 px-4 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue'>Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>);
};


export default Contact;