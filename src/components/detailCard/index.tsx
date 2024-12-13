'use client';

import React from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames';

interface DetailCardProps {
  header: React.ReactNode;
  title: string;
  description: string;
  classes?: string;
}

const DetailCard: React.FC<DetailCardProps> = ({
  header,
  title,
  description,
  classes = 'bg-white shadow-md rounded-lg', // مقدار پیش‌فرض
}: DetailCardProps) => {
  const cardClasses = classNames('p-4 flex flex-col', classes);

  return (
    <div className={cardClasses}>
      <motion.div
        className="flex flex-col p-3"
        initial={{y: 30, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.6, ease: 'easeInOut'}}
      >
        <div className="text-4xl m-3 mb-4">{header}</div>
        <h1
          className="m-2 font-poppins font-medium text-xl text-gray-700 dark:text-gray-200 mb-4"
          aria-label="Card Title"
        >
          {title}
        </h1>
        <p
          className="m-2 font-poppins font-medium text-gray-500 dark:text-gray-400 tracking-normal mb-4"
          aria-label="Card Description"
        >
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default DetailCard;
