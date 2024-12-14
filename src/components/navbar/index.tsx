'use client';

import React, {useState} from 'react';
import {IoMoonOutline, IoSunnyOutline} from 'react-icons/io5';
import {LiaIdCard} from 'react-icons/lia';
import {GrProjects} from 'react-icons/gr';
import {RiContactsBookLine, RiStackLine} from 'react-icons/ri';
import Link from 'next/link';
import {useThemeStore} from '../../store';
import {MdWorkOutline} from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const themeStore = useThemeStore();
  const themeMode = themeStore.theme;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center m-10">
        <div className="w-[10rem] h-[7rem]">{/* //Image logo */}</div>
        <div className="flex flex-row mr-2 justify-center items-center">
          <button
            type="button"
            className="relative shadow-xl w-12 h-12 text-gray-800 flex items-center justify-center rounded-full mr-3 hover:bg-red-400 hover:text-white bg-white focus:outline-none overflow-hidden"
          >
            {themeMode === 'light' ? (
              <IoMoonOutline
                className="text-2xl"
                onClick={() => themeStore.setTheme('dark')}
              />
            ) : (
              <IoSunnyOutline
                className="text-2xl"
                onClick={() => themeStore.setTheme('light')}
              />
            )}
          </button>
          <button
            type="button"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-b from-rose-500 to-pink-500 focus:outline-none overflow-hidden lg:hidden"
            onClick={toggleMenu}
          >
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform rotate-45' : '-translate-y-2'}`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform translate-x-12' : 'translate-x-0'}`}
            />
            <div
              className={`absolute w-6 h-0.5 bg-white transition-transform duration-500 ${isOpen ? 'transform -rotate-45' : 'translate-y-2'}`}
            />
          </button>
        </div>
      </div>
      <div
        className={`absolute top-[20%] mt-2 w-[95%] bg-white dark:bg-gray-800 rounded-lg lg:hidden shadow-lg overflow-hidden transition-all duration-500 transform origin-top ${isOpen ? 'scale-y-100' : 'scale-y-0'} self-center`}
      >
        <div className="py-2 px-3 flex flex-col ">
          <Link href="/" onClick={toggleMenu}>
            <div
              className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 dark:text-gray-300 hover:text-red-500 cursor-pointer flex items-center`}
            >
              <LiaIdCard className="text-xl" />
              <span className="ml-2 text-sm font-normal">About</span>
            </div>
          </Link>
          <Link href="/resume" onClick={toggleMenu}>
            <div
              className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 dark:text-gray-300 hover:text-red-500 cursor-pointer flex items-center`}
            >
              <MdWorkOutline className="text-base" />
              <span className="ml-2 text-sm font-normal">Resume</span>
            </div>
          </Link>
          <Link href="/skill" onClick={toggleMenu}>
            <div
              className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 dark:text-gray-300 hover:text-red-500 cursor-pointer flex items-center`}
            >
              <RiStackLine className="text-base" />
              <span className="ml-2 text-sm font-normal">Skill</span>
            </div>
          </Link>
          <Link href="/portfolio" onClick={toggleMenu}>
            <div
              className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 dark:text-gray-300 hover:text-red-500 cursor-pointer flex items-center`}
            >
              <GrProjects className="text-xl" />
              <span className="ml-2 text-sm font-normal">Portfolio</span>
            </div>
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            <div
              className={`py-1 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'} m-3 font-poppins text-gray-500 dark:text-gray-300 hover:text-red-500 cursor-pointer flex items-center`}
            >
              <RiContactsBookLine className="text-xl" />
              <span className="ml-2 text-sm font-normal">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
