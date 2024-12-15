'use client';
import React from 'react';
import {FaCode, FaInstagram, FaLinkedinIn, FaMobileAlt} from 'react-icons/fa';
import {MdOutlineMail} from 'react-icons/md';
import {IoLocationSharp} from 'react-icons/io5';
import {PiDownloadLight} from 'react-icons/pi';
import sadeq from '../../../public/images/sadeq.jpg';
import SocialCard from '../socialCard';
import PersonalDetailCard from '../personalDetailCard';
import Image from 'next/image';
import {FaGithub} from 'react-icons/fa6';

function ProfileContainer() {
  return (
    <div className="flex flex-col bg-white m-5 mt-10 lg:mt-40 rounded-[18px] justify-center items-center p-5 lg:justify-start dark:bg-gray-800">
      <div className=" mt-11 lg:mt-0 lg:absolute lg:top-20 mb-7 w-[14rem] h-[14rem] rounded-lg md:w-[16rem] md:h-[16rem] lg:w-[10rem] lg:h-[10rem] ">
        <Image
          src={sadeq}
          className="rounded-[18px] object-fill"
          alt="Profie"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGPY2fXjv458/H9Bbtf/IDbD/7v//8/Mvfq/J+nEfxAbAF3NFsFiuaE1AAAAAElFTkSuQmCC"
        />
      </div>
      <div className=" text-2xl md:text-3xl lg:text-xl lg:mt-20 dark:text-gray-200">
        <p className="font-robotoslab">Sadeq Mozaffari</p>
      </div>
      <div className="bg-slate-100 rounded-lg mt-3 mb-4 p-1 dark:bg-slate-700 dark:text-gray-400">
        <p className="font-poppins font-[550] m-2 md:text-lg lg:text-sm">
          Full Stack Developer
        </p>
      </div>
      <div className="flex flex-row w-[12rem] h-[2rem] mb-5 justify-around ">
        <div>
          <a
            href="https://www.instagram.com/sadeq.mozaffari/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialCard
              icon={
                <FaInstagram className="text-red-500 dark:text-rose-600 md:text-xl lg:text-sm" />
              }
              className="bg-gray-100  dark:bg-slate-700 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex md:w-[2.6rem] md:h-[2.6rem] lg:w-[2.2rem] lg:h-[2.2rem]"
            />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/sadeqmozaffari"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialCard
              icon={
                <FaGithub className="text-black-500  dark:text-white md:text-xl lg:text-sm" />
              }
              className="bg-gray-100  dark:bg-slate-700 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex md:w-[2.6rem] md:h-[2.6rem] lg:w-[2.2rem] lg:h-[2.2rem]"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sadeqmozaffari/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialCard
              icon={
                <FaLinkedinIn className="text-blue-950  dark:text-sky-600 md:text-xl lg:text-sm" />
              }
              className="bg-gray-100  dark:bg-slate-700 rounded-lg justify-center items-center w-[2.3rem] h-[2.3rem] flex md:w-[2.6rem] md:h-[2.6rem] lg:w-[2.2rem] lg:h-[2.2rem]"
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-700 mb-5 flex flex-col ml-8 mr-8 w-full rounded-2xl justify-items-start lg:m-0">
        <div className="flex flex-row items-center m-2 mb-1 ">
          <SocialCard
            icon={<FaMobileAlt className="text-red-500 text-2xl lg:text-xl" />}
            className="bg-white dark:bg-slate-800 m-3 p-3 rounded-lg drop-shadow-xl  "
          />
          <PersonalDetailCard title="Phone" detail="+93 794954086" />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={
              <MdOutlineMail className="text-green-600 text-2xl lg:text-xl" />
            }
            className="bg-white dark:bg-slate-800 m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard title="Email" detail="sadeqmozaffari@gmail.com" />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={
              <IoLocationSharp className="text-red-400 text-2xl lg:text-xl" />
            }
            className="bg-white dark:bg-slate-800 m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard
            title="Location"
            detail="Mazar-e-sharif, Afghanistan"
          />
        </div>
        <hr className="h-px self-center w-[90%] bg-gray-300 border-0" />
        <div className="flex flex-row items-center m-3">
          <SocialCard
            icon={<FaCode className="text-purple-500 text-2xl lg:text-xl" />}
            className="bg-white dark:bg-slate-800 m-3 p-3 rounded-lg drop-shadow-xl"
          />
          <PersonalDetailCard
            title="Tech Stack"
            detail="Building scalable and modern web applications using .NET, Next.js, and React.js."
          />
        </div>
      </div>
      <a href={'/sadeqcv2024.pdf'} download="sadeqCV.pdf" target="_blank">
        <div className="bg-gradient-to-r to-pink-500 from-rose-500  w-48 flex flex-row mb-5 justify-center items-center rounded-2xl p-2 mt-8 cursor-pointer ">
          <PiDownloadLight className="m-2 ml-2 text-white text-3xl lg:text-xl animate-bounce" />
          <p className="text-white text-lg font-poppins mr-2 lg:text-sm">
            Download CV
          </p>
        </div>
      </a>
    </div>
  );
}

export default ProfileContainer;
