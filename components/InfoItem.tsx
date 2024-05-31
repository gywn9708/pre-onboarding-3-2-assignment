import React from 'react';

interface InfoItemProps {
  name: string;
  value: string;
}

export default function InfoItem({ name, value }: InfoItemProps) {
  return (
    <li className="lg:w-full md:w-1/2 w-full mb-3 bg-gray-50">
      <div className="h-full ">
        <div className=" flex items-center rounded">
          <div className="text-sm flex-grow flex items-center bg-white ">
            <h2 className="h-full w-1/2 py-2 px-3 text-center bg-zinc-50  text-gray-500 title-font font-medium">
              {name}
            </h2>
            <p className="h-full w-1/2 text-sm text-center text-gray-500 ">
              {value}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
