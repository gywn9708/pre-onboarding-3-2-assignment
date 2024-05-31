import React from 'react';

export default function THead({ column }: { column: string[] }) {
  return (
    <thead className="text-xstext-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {column.map((item) => (
          <th key={item} className="py-1 text-center px-2  text-xs">
            {item}
          </th>
        ))}
        <th className="py-1  px-2 text-xs" />
        <th className="py-1  px-2 text-xs" />
      </tr>
    </thead>
  );
}
