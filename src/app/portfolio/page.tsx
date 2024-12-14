import React from 'react';

const Portfolio = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 m-5 mt-10 rounded-[18px] items-start p-5 ">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab dark:text-white">
          Portfolio
        </h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:mt-5  mb-10">
        <div className="flex flex-col w-full items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Portfolio;
