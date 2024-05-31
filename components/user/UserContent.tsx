import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserTableType } from '../../models/InfoTypes';
import Table from '../Table';
import { useFormatUserTable } from '../../hooks/useUserTable';

const tableColumns = [
  '고객명',
  '보유 계좌 수',
  '이메일',
  '성별 코드',
  '생년 월일',
  '휴대폰 번호',
  '최근 로그인',
  '혜택 수신 동의 여부',
  '활성화',
  '가입일',
];

const FILTER = {
  staff: 'staff',
  client: 'client',
  active: 'active',
  inactive: 'inactive',
} as const;

export default function UserContent() {
  const router = useRouter();
  const { query } = router;
  const { totalItems, userTableData } = useFormatUserTable();
  const [filteredData, setFilteredData] =
    useState<UserTableType[]>(userTableData);
  const { active, staff } = query;
  useEffect(() => {
    setFilteredData((prev) => {
      let result = [...userTableData];
      if (active === FILTER.active) {
        result = result.filter((item) => item.is_active);
      }
      if (active === FILTER.inactive) {
        result = result.filter((item) => !item.is_active);
      }
      if (staff === FILTER.staff) {
        result = result.filter((item) => item.is_staff);
      }
      if (staff === FILTER.client) {
        result = result.filter((item) => !item.is_staff);
      }
      return result;
    });
  }, [active, staff, userTableData]);

  return (
    <section className="bg-slate-100 flex-1 ">
      <Table
        column={tableColumns}
        data={filteredData}
        totalItems={totalItems}
      />
    </section>
  );
}
