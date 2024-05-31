import { useRouter } from 'next/router';
import React from 'react';
import { SelectType } from '../models/InfoTypes';
import TableSelectItem from './TableSelectItem';

interface TableSelectProps {
  select: SelectType[];
}

export default function TableSelect({ select }: TableSelectProps) {
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    router.push({
      pathname: router.route,
      query: {
        ...router.query,
        [name]: value,
      },
    });
  };
  return (
    <div className="flex">
      {select.map((item, idx) => (
        <TableSelectItem key={idx} item={item} onChange={handleChange} />
      ))}
    </div>
  );
}
