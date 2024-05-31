import React, { useState } from 'react';
import { BsArrowUp, BsTrash } from 'react-icons/bs';
import Link from 'next/link';
import { UserTableType } from '../../models/InfoTypes';
import { useModifyUser } from '../../hooks/useModifyUser';

interface UserTableItemProps {
  item: UserTableType;
}

export default function UserTableItem({ item }: UserTableItemProps) {
  const {
    name,
    account_count,
    email,
    gender_origin,
    birth_date,
    phone_number,
    last_login,
    allow_marketing_push,
    is_active,
    created_at,
    uuid,
    id,
  } = item;
  const [isModifying, setIsModifying] = useState(false);

  const [userName, setUserName] = useState(name);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setUserName(value);
  };
  const toggleIsModifying = () => {
    setIsModifying((prev) => !prev);
  };
  const {
    userSetting,
    userDeleteMutation,
    settingDeleteMutation,
    nameMutation,
  } = useModifyUser(uuid);
  const handleEdit = () => {
    nameMutation.mutate({ id: item.id.toString(), name: userName });
    toggleIsModifying();
  };

  const handleDelete = () => {
    userDeleteMutation.mutate(item.id.toString());
    settingDeleteMutation.mutate(userSetting?.id.toString() || '');
  };

  return (
    <tr className="bg-white border-b w-full dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="py-1 text-center px-2">
        {isModifying ? (
          <div className="flex text-xs">
            <input
              type="text"
              className="border w-24 mr-1 text-center"
              value={userName}
              onChange={handleChange}
            />
            <button
              type="button"
              className="bg-blue-100 px-1"
              onClick={handleEdit}
            >
              <BsArrowUp />
            </button>
          </div>
        ) : (
          <Link href={`/${id}`}>{name}</Link>
        )}
      </td>
      <td className="py-1 text-center px-2">{account_count}</td>
      <td className="py-1 text-center px-2">{email}</td>
      <td className="py-1 text-center px-2">{gender_origin}</td>
      <td className="py-1 text-center px-2">{birth_date}</td>
      <td className="py-1 text-center px-2">{phone_number}</td>
      <td className="py-1 text-center px-2">{last_login}</td>
      <td className="py-1 text-center px-2">
        {allow_marketing_push.toString()}
      </td>
      <td className="py-1 text-center px-2">{is_active.toString()}</td>
      <td className="py-1 text-center px-2">{created_at}</td>
      <td className="py-1 text-center px-2 cursor-pointer">
        <button type="button" onClick={toggleIsModifying}>
          Edit
        </button>
      </td>
      <td className="py-1 text-center px-2 cursor-pointer">
        <button type="button" onClick={handleDelete}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
}
