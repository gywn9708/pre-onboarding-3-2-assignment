import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import {
  AiOutlineUser,
  AiOutlineDashboard,
  AiOutlineBank,
} from 'react-icons/ai';

import { FiLogOut } from 'react-icons/fi';
import Header from './Header';
import MenuItem from './MenuItem';

export default function Sidebar() {
  const router = useRouter();
  const { route } = router;
  const isUser = route === '/';
  const isAccount = route === '/account';

  const handleClick = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
  };

  return (
    <aside className="w-1/6 bg-slate-800 flex flex-col  ">
      <Header />
      <div className="h-2/3 w-full flex flex-col">
        <MenuItem text="대시보드">
          <AiOutlineDashboard className="mr-2" />
        </MenuItem>
        <Link
          href="/account"
          className={`w-full ${isAccount && 'bg-blue-900 '}  hover:bg-blue-900`}
        >
          <MenuItem text="계좌목록">
            <AiOutlineBank className="mr-2" />
          </MenuItem>
        </Link>
        <Link
          href="/"
          className={`${isUser && 'bg-blue-900 '} hover:bg-blue-900`}
        >
          <MenuItem text="사용자">
            <AiOutlineUser className="mr-2" />
          </MenuItem>
        </Link>
        <Link href="/login" onClick={handleClick} className="hover:bg-blue-900">
          <MenuItem text="로그아웃">
            <FiLogOut className="mr-2" />
          </MenuItem>
        </Link>
      </div>
    </aside>
  );
}
