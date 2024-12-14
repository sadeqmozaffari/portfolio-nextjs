import React from 'react';
import {FaGoogleScholar} from 'react-icons/fa6';
import {IoBriefcaseOutline} from 'react-icons/io5';

import DetailCard from '../../components/detailCard';

function Resume() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 m-5 mt-10 rounded-[18px] items-start p-5 ">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab dark:text-white">
          Resume
        </h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:p-2 lg:m-2">
          <div className="flex flex-col">
            <div className="flex justify-center items-center m-4 mt-5 mb-7 lg:mt-0">
              <IoBriefcaseOutline className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                Experience
              </p>
            </div>
            <div className=" flex flex-row justify-center items-center gap-4 lg:ml-4">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                header="July 2021 – Present"
                title="Freelancer Web Developer"
                description="
             Collaborated with designers, led web development projects, ensured client satisfaction, and optimized performance for user-friendly, high-quality solutions."
              />
              <DetailCard
                classes="flex flex-col bg-sky-100 w-[95%] dark:bg-gray-700 self-center p-2 rounded-2xl mb-8 shadow-md"
                header="October 2023 – April 2024"
                title="Full Stack Developer | Bashi Innovation "
                description="Designed and managed databases, developed responsive websites, and provided ongoing support for live applications."
              />
            </div>
            <div className=" flex flex-row justify-center items-center gap-4 lg:ml-4">
              <DetailCard
                classes="flex flex-col bg-sky-50 w-[95%] dark:bg-gray-700 self-center p-2 rounded-2xl mb-8 shadow-md"
                header="July 2019 – November 2021"
                title="Full Stack Developer | Hosh Zareen "
                description="Collaborated on corporate design projects, developed efficient code, and ensured quality through usability checks."
              />
              <DetailCard
                classes="flex flex-col bg-rose-50 w-[95%] dark:bg-gray-700 self-center p-2 rounded-2xl mb-8 shadow-md"
                header="January 2020 – January 2021"
                title="Data Entry Operator | National Statistics and Information Authority  "
                description="Tested and debugged web projects as part of the development team, Entered and managed data efficiently in database systems."
              />
            </div>
            <div className=" flex flex-row justify-center items-center gap-4 lg:ml-4">
              <DetailCard
                classes="flex flex-col bg-sky-50 w-[95%] dark:bg-gray-700 self-center p-2 rounded-2xl mb-8 shadow-md"
                header="January 2016 – December 2017"
                title="Intern Web Developer & Database Intern "
                description="Tested and debugged web projects as part of the development team,Entered and managed data efficiently in database systems."
              />
              {/* <DetailCard
                classes="flex flex-col bg-rose-50 w-[95%] dark:bg-gray-700 self-center p-2 rounded-2xl mb-8 shadow-md"
                header="January 2020 – January 2021"
                title="Data Entry Operator | National Statistics and Information Authority  "
                description="Tested and debugged web projects as part of the development team, Entered and managed data efficiently in database systems."
              /> */}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center m-4 mt-8 mb-7 lg:mt-0">
                <FaGoogleScholar className="text-3xl text-red-400" />
                <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                  Education
                </p>
              </div>
              <div className=" flex flex-row justify-center items-center gap-4 lg:ml-4">
                <DetailCard
                  classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                  header="2012"
                  title="Graduated school"
                  description="Sayed Ismail Balkhi in Mazar-e-sharif "
                />
                <DetailCard
                  classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                  header="Mar 2014 - Dec 2018"
                  title="Bachelor of Computer Science"
                  description="Kabul Polytechnic University, Kabul, Afghanistan"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="h-px self-center w-[90%] bg-rose-300 border-0 mb-10" /> */}
      </div>
    </div>
  );
}

export default Resume;
