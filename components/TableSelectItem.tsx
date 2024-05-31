import React from 'react';
import { useRouter } from 'next/router';
import { SelectType } from '../models/InfoTypes';

interface TableSelectItemProps {
  item: SelectType;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function TableSelectItem({
  item,
  onChange,
}: TableSelectItemProps) {
  const router = useRouter();
  const { query } = router;
  const { name } = item[0];
  return (
    <select
      onChange={onChange}
      name={name}
      value={query[name]}
      className="w-30 text-xs py-1 px-3 mx-2 border-1 border-solid border-slate-300 outline-none select select-error rounded-md border  text-center"
    >
      {item.map((option) => (
        <option className="text-center" key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
