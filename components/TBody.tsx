import React from 'react';
import { AccountTableType, UserTableType } from '../models/InfoTypes';
import AccountTableItem from './account/AccountTableItem';
import UserTableItem from './user/UserTableItem';

interface TBodyProps {
  data: UserTableType[] | AccountTableType[];
}

export default function TBody({ data }: TBodyProps) {
  return (
    <tbody className="bg-white">
      {data.map((item) => {
        if (item.kind === 'user') {
          return <UserTableItem key={item.id} item={item} />;
        }
        return <AccountTableItem key={item.id} item={item} />;
      })}
    </tbody>
  );
}
