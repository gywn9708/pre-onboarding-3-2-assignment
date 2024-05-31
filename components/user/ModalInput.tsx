import React from 'react';

interface ModalInputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ModalInput({
  id,
  type,
  placeholder,
  value,
  onChange,
}: ModalInputProps) {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {value}
      </label>
      <input
        required
        className="appearance-none block w-full bg-gray-200 text-gray-400  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-200"
        id={id}
        type={type}
        placeholder={placeholder}
        name={id}
        onChange={onChange}
      />
    </div>
  );
}
