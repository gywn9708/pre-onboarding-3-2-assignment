import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AccountTableType } from '../../models/InfoTypes';

interface AccountTableItemProps {
  item: AccountTableType;
}

export default function AccountTableItem({ item }: AccountTableItemProps) {
  const {
    user_name,
    broker_name,
    number,
    status,
    name,
    assets,
    payments,
    is_active,
    created_at,
    profit,
  } = item;
  let bgColor;
  if (profit === 'down') {
    bgColor = 'bg-blue-500';
  }
  if (profit === 'equal') {
    bgColor = 'bg-black';
  }
  if (profit === 'up') {
    bgColor = 'bg-rose-500';
  }
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name: btnName } = e.currentTarget;
    if (btnName === 'userDetail') {
      router.push(`/${item.userId}`);
    } else {
      router.push(`/account/${item.id}`);
    }
  };

  return (
    <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-1 text-center px-2">
        <button type="button" onClick={handleClick} name="userDetail">
          {user_name}
        </button>
      </td>
      <td className="py-1 text-center px-2">{broker_name}</td>
      <td className="py-1 text-center px-2">
        <button type="button" onClick={handleClick} name="accountDetail">
          {number}
        </button>
      </td>
      <td className="py-1 text-center px-2">{status}</td>
      <td className="py-1 text-center px-2">{name}</td>
      <td className={`${bgColor} text-slate-100 py-1 text-center px-2`}>
        {assets}
      </td>
      <td className="py-1 text-center px-2">{payments}</td>
      <td className="py-1 text-center px-2">{is_active.toString()}</td>
      <td className="py-1 text-center ">{created_at}</td>
    </tr>
  );
}
