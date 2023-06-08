import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { useState } from 'react';

const Resume = () => {

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDownload = () => {
    if (showConfirmation) {
      const storageRef = firebase.storage().ref();
      const resumeRef = storageRef.child('Resume.pdf'); // Replace 'resume.pdf' with the actual name of your resume file

      resumeRef
        .getDownloadURL()
        .then((url) => {
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Resume.pdf'; // Replace 'resume.pdf' with the actual name of your resume file
          link.target = '_blank'; // Open the download link in a new tab
          link.rel = 'noopener noreferrer';
          link.click();
        })
        .catch((error) => {
          console.log(error);
        });
        setShowConfirmation(false);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <section className=" sm:py-4 md:py-6 lg:py-8 xl:py-10 sm:mt-40 sm:mb-2 md:mt-40 md:mb-2 lg:mt-0 lg:mb-2 xl:mt-20 xl:mb-2" id="resume">
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex-1 bg-no-repeat'
        >
          <h2 className='h2 text-accent text-[40px] font-bold font-secondary mb-6 px-12 py-5'>Resume</h2>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 py-5">
          <div className="lg:col-start-1 lg:col-end-2">
            {/* Left Section for summary*/}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.06 }}
              className='flex-1 bg-no-repeat'
            >
              <h2 className="text-4xl text-gradient font-secondary mb-3">Summary</h2>
              {/* Add your summary content here */}
              <p className="font-semibold mb-10 font-primary">
                Tech-loving bachelor with a passion for Android development.
                Motivated and continuously enhancing skills to become a
                proficient Android developer. Committed to staying updated with
                the latest technologies. Strong problem-solving and
                communication skills. Seeking impactful opportunities in the
                tech industry.
              </p>
            </motion.div>
            {/* Left Section for Education*/}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.06 }}
              className='flex-1 bg-no-repeat'
            >
              <h2 className="text-4xl text-gradient font-secondary mb-3">Education</h2>
              <h3 className="text-2xl font-secondary">Kendriya Vidyalaya Sangathan</h3>
              <h4 className="mb-2 font-semibold font-secondary">PCM + IP</h4>
              <div className="px-2 w-20 h-9 bg-gradient-to-r mb-3 from-blue-500 to-purple-800 rounded-2xl flex items-center justify-center">
                <h6 className="text-sm text-white font-semibold font-secondary">2010-2022</h6>
              </div>
              <h3 className="text-2xl font-secondary">
                Vellore Institute Of Technology, Bhopal
              </h3>
              <h4 className="font-secondary">
                B.Tech Computer Science and Engineering
              </h4>
              <h5 className="font-semibold mb-2 font-secondary">Sehore, Madhya Pradesh</h5>
              <div className="w-40 h-9 bg-gradient-to-r mb-10 from-blue-500 to-purple-800 rounded-2xl flex items-center justify-center">
                <h6 className=" px-2 text-sm text-white font-secondary">
                  Expected: Sept 2026
                </h6>
              </div>
            </motion.div>
            {/* Left Section */}
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.06 }}
              className='flex-1 bg-no-repeat'
            >
              <h2 className="text-4xl text-gradient font-bold font-secondary mb-3">Skills</h2>
              <h3 className="text-3xl font-bold font-secondary mb-3">Languages</h3>
              <h4 className="font-semibold font-primary mb-3">
                • Kotlin (Fluent)
                • Java (Fluent)
                • HTML
                • CSS
                • Python
                • XML/JSON
                • React
                • Javascript
                • Tailwind CSS
              </h4>
              <h3 className="text-3xl font-bold mb-3 font-secondary">Technologies</h3>
              <h4 className="font-semibold font-primary mb-3">
                • Android
                • Git & Github
                • Firebase
                • Postman
              </h4>
              <h3 className="text-3xl font-bold font-secondary mb-3">Concepts</h3>
              <h4 className="font-semibold font-primary mb-10">
                • Android App Development
                • Object Oriented Programming
                • Data Structures & Algorithms
              </h4>
              {/* Add your skills content here */}
            </motion.div>
          </div>
          {/* <div className="h-full w-0.5 bg-white mx-auto"></div> */}
          <div className="lg:col-start-2 lg:col-end-3">
            {/* Right Section */}
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.06 }}
              className='flex-1 bg-no-repeat'
            >
              <h2 className="text-4xl text-gradient font-bold font-secondary mb-4">Experience</h2>
              {/* Add your experience content here */}
              <h4 className="text-2xl font-bold font-secondary mb-3">Club Member, Microsoft Technical Club</h4>
              <h5 className="font-semibold mb-3 font-primary">
                As a member of this technical club, I have the opportunity to work
                in volunteer teams for a variety of technical activities, including hackathons
                and others. In order to contribute our abilities to the technical club, we are
                also given the opportunity to join the core team.
              </h5>
              <div className="w-40 h-9 bg-gradient-to-r mb-10 from-blue-500 to-purple-800 rounded-2xl flex items-center justify-center">
                <h6 className=" px-2 text-sm text-white font-semibold font-secondary">
                  Oct 2022 - Present
                </h6>
              </div>
            </motion.div>
            {/* Right Section */}
            <motion.div
              variants={fadeIn('left', 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.02 }}
              className='flex-1 bg-no-repeat'
            >
              <h2 className="text-4xl text-gradient font-bold mb-4 font-secondary">Projects</h2>
              {/* Add your projects content here */}
              <h3 className="text-3xl mb-2 font-semibold font-secondary">Smack Chat App</h3>
              <h4 className="mb-3 font-semibold font-primary">
                A chat programme used for instant messaging serves as the foundation for
                this project. This app was created using Android Studio with Kotlin as the
                programming language.
              </h4>
              <h3 className="text-3xl mb-2 font-semibold font-secondary">Notes App</h3>
              <h4 className="mb-3 font-semibold font-primary">
                A notes app that uses Room Database (local storage) to store the notes that are written inside it.
                This app is made using Kotlin programming language and user interface is designed using XML code.
              </h4>
              <h3 className="text-3xl mb-2 font-semibold font-secondary">Amoled Wallpaper</h3>
              <h4 className="mb-3 font-semibold font-primary">
                A wallpaper app made using Koltin that uses Glide library to load the wallpaper using Firebase Fiestore database.
              </h4>
              <h3 className="text-3xl mb-2 font-semibold font-secondary">Meme App</h3>
              <h4 className="mb-10 font-semibold font-primary">
                A meme app that uses glide to load meme images, okhttp & retrofit for api calling and GSON to convert JSON data.
              </h4>
            </motion.div>
            <div>
              {showConfirmation ? (
                <div>
                  <p className="text-2xl sm:text-xl font-primary">Do you want to download this resume?</p>
                  <motion.button 
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className='btn btn-sm
                  hover:bg-blue-600 text-white 
                    font-bold font-tertiary py-2 px-4 rounded-3xl text-[17px]
                    shadow-md transition-all duration-300 
                    hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue m-2'
                    onClick={handleDownload}>
                    Yes
                  </motion.button>
                  <motion.button
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className='btn btn-sm
                  hover:bg-blue-600 text-white 
                    font-bold py-2 px-4 rounded-3xl text-[17px]
                    shadow-md font-tertiary transition-all duration-300 
                    hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue m-2' 
                    onClick={handleCancel}>
                    No
                  </motion.button>
                </div>
              ) : (
                <motion.button 
                  variants={fadeIn('left', 0.5)}
                  initial="hidden"
                  whileInView={'show'}
                  onClick={handleDownload}
                  className='btn btn-sm
                hover:bg-blue-600 text-white font-tertiary
                  font-bold py-2 px-4 rounded-3xl text-[17px]
                  shadow-md transition-all duration-300 
                  hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue'>Download Resume</motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

