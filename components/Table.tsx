import React, { useState } from 'react';
import { AccountTableType, UserTableType } from '../models/InfoTypes';
import AccountTableItem from './account/AccountTableItem';
import Modal from './user/Modal';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import UserTableItem from './user/UserTableItem';
import THead from './THead';
import TBody from './TBody';

interface TableProps {
  data: UserTableType[] | AccountTableType[];
  totalItems: number;
  column: string[];
}

export default function Table({ column, data, totalItems }: TableProps) {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const toggleModal = () => {
    setIsModalShowing((prev) => !prev);
  };
  return (
    <div className=" h-full relative shadow-md sm:rounded-lg px-3 ">
      <TableHeader toggleModal={toggleModal} isModalShowing={isModalShowing} />
      {!isModalShowing && (
        <>
          <table className="bg-white w-full text-sm text-gray-500 dark:text-gray-400">
            <THead column={column} />
            <TBody data={data} />
          </table>
          <Pagination totalItems={totalItems} />
        </>
      )}
      {isModalShowing && <Modal toggleModal={toggleModal} />}
    </div>
  );
}
