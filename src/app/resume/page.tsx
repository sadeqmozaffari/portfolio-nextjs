import React from 'react';
import {FaGoogleScholar, FaWandMagicSparkles} from 'react-icons/fa6';
import {IoBriefcaseOutline} from 'react-icons/io5';
import DetailCard from '../../components/detailCard';
import {RiNextjsFill} from 'react-icons/ri';
import {VscVscodeInsiders} from 'react-icons/vsc';
import {GrReactjs} from 'react-icons/gr';
import {BsDatabase} from 'react-icons/bs';
import {TbBrandCSharp} from 'react-icons/tb';
import {BiLogoPostgresql} from 'react-icons/bi';
import {DiGithub} from 'react-icons/di';
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiGit,
  SiPython,
} from 'react-icons/si';
import KnowledgeCard from '../../components/knowledgeCard';
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
            <div className=" flex md:flex-row flex-col justify-center items-center gap-4 lg:ml-4">
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
            <div className=" flex md:flex-row flex-col justify-center items-center gap-4 lg:ml-4">
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
            <div className="flex flex-col  ">
              <div className="flex justify-center items-center m-4 mt-8 mb-7 lg:mt-0">
                <FaGoogleScholar className="text-3xl text-red-400" />
                <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                  Education
                </p>
              </div>
              <div className=" flex md:flex-row flex-col justify-center items-center gap-4 lg:ml-4">
                <DetailCard
                  classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                  header="Mar 2014 - Dec 2018"
                  title="Bachelor of Computer Science"
                  description="Kabul Polytechnic University, Kabul, Afghanistan"
                />
                <DetailCard
                  classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-8 shadow-md"
                  header="2012"
                  title="Graduated school"
                  description="Sayed Ismail Balkhi in Mazar-e-sharif "
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="h-px self-center w-[90%] bg-rose-300 border-0 mb-10" />
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:mt-5  mb-10">
          {/* <div className="lg:mt-5">
            <div className="flex justify-center items-center m-4 lg:mt-0">
              <FaWandMagicSparkles className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                Expertise
              </p>
            </div>
            <div className="self-center">
              <Skill />
            </div>
          </div> */}
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex justify-center items-center m-4 mb-7 mt-6 lg:mt-5">
              <FaWandMagicSparkles className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                Knowledge and Expertise
              </p>
            </div>
            <div className="m-3 ml-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5  w-[90%] justify-around ">
              <div className="flex flex-col">
                <KnowledgeCard
                  name=".NET"
                  icon={
                    <VscVscodeInsiders className="text-purple-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Nextjs"
                  icon={
                    <RiNextjsFill className="text-white-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="React"
                  icon={
                    <GrReactjs className="text-blue-400 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="JavaScript"
                  icon={
                    <SiJavascript className="text-yellow-300 text-3xl lg:text-xl" />
                  }
                />

                <KnowledgeCard
                  name="TypeScript"
                  icon={
                    <SiTypescript className="text-sky-700 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Jquery"
                  icon={
                    <SiJquery className="text-red-500 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="Tailwind"
                  icon={
                    <SiTailwindcss className="text-green-500 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Bootstrap"
                  icon={
                    <SiBootstrap className="text-dark-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Sass"
                  icon={<SiSass className="text-red-500 text-3xl lg:text-xl" />}
                />
              </div>

              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="Git"
                  icon={<SiGit className="text-red-500 text-3xl lg:text-xl" />}
                />
                <KnowledgeCard
                  name="Sql Server"
                  icon={
                    <BsDatabase className="text-black-400 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="PostgreSQL"
                  icon={
                    <BiLogoPostgresql className="text-blue-500 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="C#"
                  icon={
                    <TbBrandCSharp className="text-purple-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Github"
                  icon={
                    <DiGithub className="text-black-400 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Python"
                  icon={
                    <SiPython className="text-yellow-400 text-3xl lg:text-xl" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
