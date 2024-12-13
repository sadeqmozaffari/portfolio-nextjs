'use client';
import React from 'react';
import {IoMoonOutline, IoSunnyOutline} from 'react-icons/io5';
import LargeNav from '../../components/largeNav';
import Navbar from '../../components/navbar';
import ProfileContainer from '../../components/profile/page';
import {useThemeStore} from '../../store';

interface HomeLayoutComponentProps {
  child: React.ReactNode;
}
const HomeLayoutComponent = ({child}: HomeLayoutComponentProps) => {
  const themeStore = useThemeStore();
  const themeMode = themeStore.theme;

  return (
    <div className={themeMode === 'dark' ? 'dark' : ''}>
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="flex flex-col justify-around lg:flex-row lg:justify-center lg:pl-40 lg:pr-40">
        <div>
          <ProfileContainer />
        </div>
        <div className="lg:flex-2 lg:flex lg:flex-col lg:items-center lg:justify-center lg:mt-10">
          <div className="hidden lg:flex">
            <LargeNav />
          </div>
          {child}
        </div>
        <div className="hidden md:block md:fixed md:bottom-10 md:right-10 md:z-10">
          <button
            onClick={() =>
              themeStore.setTheme(themeMode === 'light' ? 'dark' : 'light')
            }
            type="button"
            className="relative drop-shadow-xl w-12 h-12 text-gray-800 flex items-center justify-center rounded-full hover:bg-red-400 hover:text-white bg-white dark:bg-gray-800 dark:text-white focus:outline-none overflow-hidden"
          >
            {themeMode === 'light' ? (
              <IoMoonOutline className="text-2xl" />
            ) : (
              <IoSunnyOutline className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeLayoutComponent;
