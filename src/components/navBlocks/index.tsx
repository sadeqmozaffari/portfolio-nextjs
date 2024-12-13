'use client';
import React from 'react';
interface NavBlocksProps {
  icon: React.ReactNode;
  linkName: string;
  active?: boolean;
  classname?: string;
}
function NavBlocks({icon, linkName, active = false}: NavBlocksProps) {
  const baseClass =
    'flex flex-col items-center justify-center ml-4 px-5 py-4 cursor-pointer';
  return (
    <div
      className={
        active
          ? `${baseClass} bg-gradient-to-r to-pink-500 from-rose-500  rounded-2xl text-white `
          : `${baseClass} bg-gray-100 dark:bg-gray-700 rounded-2xl text-gray-600 hover:bg-gradient-to-r hover:to-pink-500 hover:from-rose-500 hover:text-white dark:text-white`
      }
    >
      <div className="text-2xl">{icon}</div>
      <div className="font-poppins mt-1 text-sm">{linkName}</div>
    </div>
  );
}

export default NavBlocks;
