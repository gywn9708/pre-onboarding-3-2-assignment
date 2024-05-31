import React from 'react';
import { AccountType } from '../../models/InfoTypes';
import { accountStatus, broker } from '../../models/variables';
import { formatDate } from '../../utils/formatDate';
import { maskAccountNumber } from '../../utils/maskNumber';
import InfoItem from '../InfoItem';

const accountInfoArray = [
  { name: '브로커명', key: 'broker_name' },
  { name: '계좌 번호', key: 'number' },
  { name: '계좌 상태', key: 'status' },
  { name: '평가 금액', key: 'assets' },
  { name: '입금 금액', key: 'payments' },
  { name: '계좌 활성화', key: 'is_active' },
  { name: '계좌 개설일', key: 'created_at' },
];

type AccountInfoType = {
  [index: string]: string;
  broker_name: string;
  number: string;
  status: string;
  assets: string;
  payments: string;
  is_active: string;
  created_at: string;
};

export default function AccountDetailItem({
  account,
}: {
  account: AccountType;
}) {
  const { broker_id, number, status, assets, payments, is_active, created_at } =
    account;
  const formattedAccount: AccountInfoType = {
    broker_name: broker[broker_id],
    number: maskAccountNumber(number),
    assets: Math.floor(+assets).toLocaleString(),
    payments: Math.floor(+payments).toLocaleString(),
    status: accountStatus[status],
    is_active: is_active.toString(),
    created_at: formatDate(created_at),
  };
  return (
    <section className="w-full border-t-2 border-t-slate-300 px-3">
      <h1 className="mb-3">{account.name}</h1>
      <ul className="grid grid-cols-3 gap-2 ">
        {accountInfoArray.map((item) => (
          <InfoItem
            key={item.key}
            name={item.name}
            value={formattedAccount[item.key]}
          />
        ))}
      </ul>
    </section>
  );
}
