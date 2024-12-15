'use client';
import DetailCard from '../components/detailCard';
import {FaCode, FaInfinity, FaWrench} from 'react-icons/fa';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col bg-white dark:bg-gray-800 dark:text-white m-5 mt-10 rounded-[18px] items-start p-5">
        <div className="flex flex-row m-4 mt-10 items-center">
          <h1 className="font-bold text-3xl font-robotoslab">About</h1>
          <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
        </div>
        <div className="flex  items-center 2xl:flex-row 2xl:items-center 2xl:justify-around m-4">
          {/* <Image src={HomeImage} alt="Home" className="w-96 lg:w-[30rem]" /> */}
          <p className="font-poppins text-gray-600 dark:text-gray-300 tracking-wider lg:tracking-normal lg:text-lg  text-justify">
            I’m a Full Stack Developer with years of experience in crafting
            dynamic and user-friendly web applications. My portfolio spans
            projects like a Hospital Management System, websites, and a live
            broadcasting solution for Tolo TV. These diverse experiences have
            sharpened my ability to develop high-performance applications. I
            specialize in front-end technologies like HTML5, CSS3, JavaScript,
            React.js, Next.js, Tailwind CSS, and Bootstrap, while also being
            proficient in building scalable back-end systems with ASP.NET Core
            and .NET Core. My focus is to simplify complex concepts and create
            seamless digital experiences that exceed expectations. Whether
            working independently or collaborating with a team, I always ensure
            high-quality, efficient results. I&apos;m dedicated to continuous
            learning and staying ahead of the latest trends in web development.
            Thanks for exploring my portfolio — I look forward to collaborating
            with you on your next project!
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-medium text-2xl font-poppins mt-5 ml-4 mb-6">
            What I Do!
          </h1>
          <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={<FaCode className="text-red-500 dark:text-red-300" />}
                title="Front-End Development"
                description="I design and develop responsive, interactive interfaces with modern web technologies to create engaging, user-centric experiences that adapt seamlessly across devices."
              />
            </div>
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={
                  <FaInfinity className="text-purple-500 dark:text-purple-300" />
                }
                title="Back-End Development"
                description="I craft secure and scalable back-end systems using ASP.NET Core and .NET Core, ensuring smooth and reliable performance to support your web applications."
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row sm:flex-col lg:justify-start lg:items-start">
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-sky-100 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={
                  <FaInfinity className="text-purple-500 dark:text-purple-300" />
                }
                title="Custom Web Solutions"
                description="From simple websites to complex systems like Hospital Management and live broadcasting solutions, I offer tailored web development services designed to meet your unique business requirements."
              />
            </div>
            <div className="flex flex-col">
              <DetailCard
                classes="flex flex-col bg-rose-50 dark:bg-gray-700 w-[95%] self-center p-2 rounded-2xl mb-5 shadow-md lg:m-4"
                header={<FaWrench className="text-red-500 dark:text-red-300" />}
                title="Web Maintenance & Support"
                description="I provide ongoing website maintenance, including regular updates, security patches, and performance optimization, ensuring your site remains secure, fast, and fully functional."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
