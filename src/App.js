import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Copyright from './components/Copyright';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Resume />
      <Contact />
      {/* <footer>
        <Copyright />
      </footer> */}
      <footer className="relative">
        <div className="h-8 w-full absolute bottom-0 left-0">
          <div className="h-full w-full filter blur-lg bg-yellow-500 opacity-50"></div>
        </div>
        <Copyright />
      </footer>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
