import React from 'react';
import ShowCase from '../../components/showCase';
const works = [
  {
    id: 2,
    title: 'Victor Azmoon Tolo TV Program',
    description: `The Tolo TV Quiz Program is an interactive quiz system developed using .NET Core and ReactJS. It offers:

    Quiz Creation: Admins manage categories, questions, and answers.
    Participation: Users compete individually or in teams, live or pre-recorded.
    Real-Time Interaction: Features timers and scoring for dynamic engagement.
    Admin Control: Oversight of content, time limits, and scoring.
    User-Friendly Design: Easy for participants and administrators to use.

    This system adds value to TV programming by creating engaging, interactive quiz experiences.`,
    img: '/images/azmoon.png',
    link: 'https://www.youtube.com/watch?v=kUrJ_Ppjj3s&list=PLL-67kOONlabo_THZx2gywKwP4jSHguBQ&index=33',
  },
  {
    id: 1,
    title: 'Akram Zada website',
    description: `The Akram Zada website is a professional, bilingual platform fully developed using ASP.NET Core MVC. Key features include:

    Bilingual Support: Provides content in two languages for a wider audience.
    Responsive Design: Adapts seamlessly to various devices, ensuring accessibility.
    User-Friendly Interface: Simple navigation for an engaging user experience.
    Secure and Reliable: Built with robust security measures for data protection.

    This website demonstrates a clean and efficient approach to showcasing services and information.`,
    img: '/images/azi.jpg',
    link: 'https://www.azi.af/',
  },
  {
    id: 3,
    title: 'Websites and Web Applications',
    description: `I have developed several projects, including a hospital management system and an accounting system for a small manufacturing company, using ASP.NET Core and SQL Server. I have also built and managed various websites, ensuring they are secure, easy to use, and perform well. My work includes maintaining these websites to keep them running smoothly.`,

    img: '/images/app.webp',
    link: 'https://www.youtube.com/watch?v=UYh0CLkC8GM&rco=1',
  },
];
const Portfolio = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 m-5 mt-10 rounded-[18px] items-start p-5 ">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab dark:text-white">
          Portfolio
        </h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>

      <div className="w-full lg:mt-5 mb-10 grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-6 items-center justify-items-center">
        {works.map((item) => (
          <ShowCase
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
