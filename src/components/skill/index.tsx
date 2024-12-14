'use client';
import React from 'react';
import {FaStar, FaRegStar} from 'react-icons/fa';
import {motion} from 'framer-motion';

const skills = [
  {name: 'Nextjs', rating: 4},
  {name: '.NET', rating: 4},
  {name: 'JavaScript', rating: 4},
  {name: 'Reactjs', rating: 3},
  {name: 'Tailwind CSS', rating: 4},
  {name: 'Bootstrap', rating: 4},
  {name: 'HTML & CSS', rating: 4},
];
interface SkillProps {
  name: string;
  rating: number;
}
function Skill({name, rating}: SkillProps) {
  return (
    <div className="flex items-center mb-4 justify-center  lg:justify-start">
      <div className="text-xl font-medium font-poppins text-gray-500 dark:text-gray-400 mr-4  lg:flex-1 lg:w-40">
        {name}
      </div>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`${name}-${i}`}
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{duration: 0.3, delay: i * 0.1}}
          >
            {i < rating ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <FaRegStar className="text-gray-400" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-white rounded-lg  dark:bg-gray-700 p-8"
          initial={{y: 50, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.6, ease: 'easeInOut'}}
        >
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} rating={skill.rating} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
