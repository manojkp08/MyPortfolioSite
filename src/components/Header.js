import React from 'react';

import {Link} from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        {/* button */}
        <Link
          to='contact'
          smooth={true}
          duration={500}
          offset={-50}>
          <button className='btn btn-sm bg-blue-500 text-[17px] hover:bg-blue-600 text-white font-bold font-tertiary py-2 px-4 rounded-3xl shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue'>Work with me</button>
        </Link>
      </div>
    </div>
  </header>;
};

export default Header;
