import React from 'react';
//import icons
import {BiUser} from 'react-icons/bi';
import {BsLaptop} from 'react-icons/bs';
import {HiOutlineDocumentText} from 'react-icons/hi';
import {AiOutlineMessage} from 'react-icons/ai';
import {MdWorkOutline } from 'react-icons/md';
import {LuHome} from 'react-icons/lu';
//link
import {Link} from 'react-scroll';

const Nav = () => {
    return (
        <nav className="fixed bottom-1.5 lg:bottom-3 xl:bottom-3 md:bottom-3 sm:bottom-3 w-full overflow-hidden z-50 flex justify-center items-center">
            <div className="container mx-auto">
                <div className="w-full bg-teal-500 bg-opacity-10 h-[85px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-yellow-500">
                    <Link 
                      to='home'
                      activeClass='active'
                      smooth={true} 
                      spy={true}
                      offset={-200}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <LuHome/>
                    </Link>
                    <Link 
                      to='about'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <BiUser/>
                    </Link>
                    <Link 
                      to='services'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <BsLaptop/>
                    </Link>
                    <Link 
                      to='work'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <MdWorkOutline/>
                    </Link>
                    <Link
                      to='resume'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <HiOutlineDocumentText/>
                    </Link>
                    <Link 
                      to='contact'
                      activeClass='active'
                      smooth={true}
                      spy={true}
                      className="cursor-pointer w-[53px] h-[53px] flex items-center 
                      justify-center">
                      <AiOutlineMessage/>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
export default Nav;