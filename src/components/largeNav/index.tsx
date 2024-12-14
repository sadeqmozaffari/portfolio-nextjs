'use client';
import React from 'react';
import {LiaIdCard} from 'react-icons/lia';
import {RiContactsBookLine, RiStackLine} from 'react-icons/ri';
import NavBlocks from '../navBlocks';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {MdWorkOutline} from 'react-icons/md';
import {GrProjects} from 'react-icons/gr';

function LargeNav() {
  const currentPath = usePathname();

  const navItems = [
    {path: '/', name: 'About', icon: <LiaIdCard />},
    {path: '/resume', name: 'Resume', icon: <MdWorkOutline />},
    {path: '/skill', name: 'Tech Skills', icon: <RiStackLine />},
    {path: '/portfolio', name: 'Porfolio', icon: <GrProjects />},
    {path: '/contact', name: 'Contact', icon: <RiContactsBookLine />},
  ];

  return (
    <div className="bg-white dark:bg-gray-800 flex px-10 py-4 items-center justify-between w-[40em] rounded-2xl shadow-lg">
      {navItems.map((item) => (
        <Link href={item.path} key={item.path}>
          <NavBlocks
            icon={item.icon}
            linkName={item.name}
            active={currentPath === item.path}
          />
        </Link>
      ))}
    </div>
  );
}

export default LargeNav;
