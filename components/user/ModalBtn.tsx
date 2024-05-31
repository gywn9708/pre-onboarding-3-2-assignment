import React from 'react';

interface ModalBtnProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label: string;
}

export default function ModalBtn({ onChange, name, label }: ModalBtnProps) {
  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 flex flex-col items-center">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-city"
      >
        {label}
      </label>
      <input
        className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="checkbox"
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
