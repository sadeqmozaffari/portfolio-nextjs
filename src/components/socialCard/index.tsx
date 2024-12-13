'use client';
import React from 'react';

interface SocialCardProps {
  icon: React.ReactNode;
  className: string;
}
function SocialCard({icon, className}: SocialCardProps) {
  return <div className={`${className} cursor-pointer`}>{icon}</div>;
}

export default SocialCard;
