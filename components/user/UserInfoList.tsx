import React from 'react';
import { formatDate } from '../../utils/formatDate';
import UserInfoItem from '../InfoItem';

const userInfoArray = [
  { name: '고객명', key: 'name' },
  { name: '이메일', key: 'email' },
  { name: '성별 코드', key: 'gender_origin' },
  { name: '생년 월일', key: 'birth_date' },
  { name: '휴대폰 번호', key: 'phone_number' },
  { name: '최근 로그인', key: 'last_login' },
  { name: '가입일', key: 'created_at' },
  { name: '주소', key: 'address' },
];

type UserInfoType = {
  [index: string]: string | number;
  uuid: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  last_login: string;
  created_at: string;
};

export default function UserInfoList({ user }: { user: UserInfoType }) {
  const {
    uuid,
    name,
    email,
    age,
    gender_origin,
    birth_date,
    phone_number,
    address,
    detail_address,
    last_login,
    created_at,
  } = user;
  const formattedUser: UserInfoType = {
    uuid,
    name,
    email,
    age,
    gender_origin,
    birth_date: formatDate(birth_date),
    phone_number,
    address: `${address} ${detail_address}`,
    last_login: formatDate(last_login),
    created_at: formatDate(created_at),
  };

  return (
    <ul className="grid grid-cols-3 gap-2 px-3">
      {userInfoArray.map((item) => (
        <UserInfoItem
          key={item.name}
          name={item.name}
          value={formattedUser[item.key].toString()}
        />
      ))}
    </ul>
  );
}
