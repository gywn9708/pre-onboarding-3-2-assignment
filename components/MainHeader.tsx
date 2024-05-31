import React from 'react';
import { BsListNested } from 'react-icons/bs';
import { AiOutlineQuestionCircle, AiOutlineBell } from 'react-icons/ai';

export default function MainHeader() {
  return (
    <header className="flex justify-between p-2 items-center h-12">
      <div className="flex items-center">
        <BsListNested className="mr-3" />
        <h1 className="font-black">투자계좌</h1>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
          <span>개발</span>
          <AiOutlineQuestionCircle className="ml-2 text-lg" />
        </div>
        <div className="flex items-center ml-5">
          <div className="relative flex justify-center items-center mr-6">
            <AiOutlineBell className="text-lg " />
            <span className="absolute -top-2 -right-5 bg-orange-500 rounded-lg text-xs text-white px-1">
              99+
            </span>
          </div>
          <div className="w-10 h-10 bg-slate-500 flex justify-center items-center text-white ">
            핀트
          </div>
        </div>
      </div>
    </header>
  );
}
