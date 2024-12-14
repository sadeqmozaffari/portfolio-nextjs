import Image from 'next/image';
import React from 'react';

interface ShowCaseProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

const ShowCase = ({img, title, description, link}: ShowCaseProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 min-w-[350px] max-w-[800px]"
    >
      <Image
        className="object-cover w-full rounded-sm"
        src={img} // مسیر مستقیم از public
        alt={title}
        width={400}
        height={400}
        priority // برای بارگذاری سریع
        quality={80} // کیفیت مناسب
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ShowCase;
