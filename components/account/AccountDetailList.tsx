import React from 'react';
import { AccountType } from '../../models/InfoTypes';
import AccountItem from './AccountDetailItem';

export default function AccountDetailList({
  accounts,
}: {
  accounts: AccountType[];
}) {
  return (
    <div className="bg-zinc-50  px-3">
      {accounts.map((item) => (
        <AccountItem key={item.id} account={item} />
      ))}
    </div>
  );
}
