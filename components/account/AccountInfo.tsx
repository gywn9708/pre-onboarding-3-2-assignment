import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useInfo } from '../../hooks/useInfo';
import AccountItem from './AccountDetailItem';

export default function AccountInfo() {
  const router = useRouter();
  const { id } = router.query;
  const infoService = useInfo();
  const { data: account } = useQuery(
    ['accounts', 'all'],
    () => {
      return infoService?.getAllAccounts();
    },
    {
      select: (data) =>
        data.find((item) => {
          return `${item.id}-${item.user_id}` === id;
        }),
    }
  );

  return (
    <section className="text-gray-600 bg-slate-100 h-full  overflow-y-auto">
      <h1 className="p-2 text-lg font-medium title-font mb-4 text-gray-700">
        계좌 정보
      </h1>
      {account && <AccountItem account={account} />}
    </section>
  );
}
