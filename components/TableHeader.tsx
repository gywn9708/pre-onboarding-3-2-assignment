import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import TableSelect from './TableSelect';
import { SelectType } from '../models/InfoTypes';

interface TableHeaderProps {
  isModalShowing: boolean;
  toggleModal: () => void;
}

const activeSelect: SelectType = [
  {
    name: 'active',
    value: 'all',
    text: 'All',
  },
  {
    name: 'active',
    text: '활성화',
    value: 'active',
  },
  {
    name: 'active',
    text: '비활성화',
    value: 'inactive',
  },
];

const staffSelect: SelectType = [
  {
    name: 'staff',
    text: 'All',
    value: 'all',
  },
  {
    name: 'staff',
    text: '임직원',
    value: 'staff',
  },
  {
    name: 'staff',
    text: '고객',
    value: 'client',
  },
];

const brokerSelect: SelectType = [
  { name: 'broker', text: 'All', value: 'all' },
  { name: 'broker', text: '유안타증권', value: '유안타증권' },
  { name: 'broker', text: '현대증권', value: '현대증권' },
  { name: 'broker', text: '미래에셋증권', value: '미래에셋증권' },
  { name: 'broker', text: '대우증권', value: '대우증권' },
  { name: 'broker', text: '삼성증권', value: '삼성증권' },
  { name: 'broker', text: '한국투자증권', value: '한국투자증권' },
  { name: 'broker', text: '우리투자증권', value: '우리투자증권' },
  { name: 'broker', text: '교보증권', value: '교보증권' },
  { name: 'broker', text: '하이투자증권', value: '하이투자증권' },
  { name: 'broker', text: 'HMC투자증권', value: 'HMC투자증권' },
  { name: 'broker', text: '키움증권', value: '키움증권' },
  { name: 'broker', text: '이베스트투자증권', value: '이베스트투자증권' },
  { name: 'broker', text: 'SK증권', value: 'SK증권' },
  { name: 'broker', text: '대신증권', value: '대신증권' },
  { name: 'broker', text: '아이엠투자증권', value: '아이엠투자증권' },
  { name: 'broker', text: '한화투자증권', value: '한화투자증권' },
  { name: 'broker', text: '하나대투자증권', value: '하나대투자증권' },
  { name: 'broker', text: '동부증권', value: '동부증권' },
  { name: 'broker', text: '유진투자증권', value: '유진투자증권' },
  { name: 'broker', text: '카카오페이증권', value: '카카오페이증권' },
  { name: 'broker', text: '메리츠종합금융증권', value: '메리츠종합금융증권' },
  { name: 'broker', text: '부국증권', value: '부국증권' },
  { name: 'broker', text: '신영증권', value: '신영증권' },
  { name: 'broker', text: 'LIG투자증권', value: 'LIG투자증권' },
  { name: 'broker', text: '토스증권', value: '토스증권' },
];

const statusSelect: SelectType = [
  { name: 'status', value: 'all', text: 'All' },
  { name: 'status', value: '관리자확인필요', text: '관리자확인필요' },
  { name: 'status', value: '입금대기', text: '입금대기' },
  { name: 'status', value: '운용중', text: '운용중' },
  { name: 'status', value: '투자중지', text: '투자중지' },
  { name: 'status', value: '해지', text: '해지' },
];

const userSelect = [activeSelect, staffSelect];
const accountSelect = [brokerSelect, activeSelect, statusSelect];

export default function TableHeader({
  isModalShowing,
  toggleModal,
}: TableHeaderProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const { route } = router;
  const isUser = route === '/';
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: router.route,
      query: {
        q: query,
      },
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  const handleClick = () => {
    toggleModal();
  };
  const select = isUser ? userSelect : accountSelect;
  return (
    <header className="flex justify-between items-center p-2">
      <TableSelect select={select} />
      <form className="relative" onSubmit={handleSubmit}>
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="table-search"
          className="outline-none block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search User"
          value={query}
          onChange={handleChange}
        />
      </form>
      {isUser && (
        <button
          className="block text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          type="button"
          data-modal-toggle="authentication-modal"
          onClick={handleClick}
        >
          {isModalShowing ? '돌아가기' : '사용자 추가하기'}
        </button>
      )}
    </header>
  );
}
