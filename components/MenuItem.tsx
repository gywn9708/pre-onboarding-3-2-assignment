import React from 'react';

interface MenuItemProps {
  text: string;
  children: React.ReactNode;
}

export default function MenuItem({ text, children }: MenuItemProps) {
  return (
    <div className="flex justify-center items-center text-indigo-400 h-10 w-full px-4">
      {children}
      <span>{text}</span>
    </div>
  );
}
