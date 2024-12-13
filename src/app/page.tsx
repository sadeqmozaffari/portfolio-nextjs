'use client';
import Image from 'next/image';
import HomeImage from '../../public/images/Home.png';
import DetailCard from '../components/detailCard';
import {FaCode, FaInfinity} from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-white dark:bg-gray-800 dark:text-white m-5 mt-10 rounded-[18px] items-start p-5">
        <div className="flex flex-row m-4 mt-10 items-center">
          <h1 className="font-bold text-3xl font-robotoslab">About</h1>
          <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
        </div>
        <div className="flex flex-col items-center 2xl:flex-row 2xl:items-center 2xl:justify-around m-4">
          <Image src={HomeImage} alt="Home" className="w-96 lg:w-[30rem]" />
          <p className="font-poppins text-gray-600 dark:text-gray-300 tracking-wider lg:tracking-normal lg:text-lg">
            Coming Soon
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-medium text-2xl font-poppins mt-5 ml-4 mb-6">
            What I Do!
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={<FaCode className="text-red-500 dark:text-red-300" />}
                title="Web Development"
                description="Have experience working in various web technologies, languages and frameworks including .NET, JavaScript, Reactjs and Nextjs"
              />
            </div>
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={
                  <FaInfinity className="text-purple-500 dark:text-purple-300" />
                }
                title="DevOps & Cloud"
                description="Have experience working on different cloud technologies including AWS & OCI, along with setting up devops pipeline for each of them"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
