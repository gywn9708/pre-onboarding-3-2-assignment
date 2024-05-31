import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useInfo } from '../../hooks/useInfo';
import AccountDetailList from '../account/AccountDetailList';
import UserInfoList from './UserInfoList';

export default function UserInfo() {
  const router = useRouter();
  const { id } = router.query;
  const infoService = useInfo();
  const { data: user } = useQuery(
    ['users', 'all'],
    () => {
      return infoService?.getAllUsers();
    },
    { select: (data) => data.find((item) => item.id.toString() === id) }
  );
  const { data: accounts } = useQuery(
    ['accounts', 'all'],
    () => {
      return infoService?.getAllAccounts();
    },
    { select: (data) => data.filter((item) => item.user_id.toString() === id) }
  );

  return (
    <section className="text-gray-600 bg-slate-100  overflow-y-auto">
      <h1 className="p-2 text-lg font-medium title-font mb-4 text-gray-700">
        사용자 정보
      </h1>
      {user && <UserInfoList user={user} />}
      {accounts && <AccountDetailList accounts={accounts} />}
    </section>
  );
}
