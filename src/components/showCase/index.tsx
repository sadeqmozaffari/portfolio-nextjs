import React from 'react';

interface ShowCaseProps {
  Img: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ShowCase = ({Img, title, description, link}: ShowCaseProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[350px] max-w-[800px]"
    >
      {Img}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 px-2">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ShowCase;
