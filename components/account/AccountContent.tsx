import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Table from '../Table';
import { AccountTableType } from '../../models/InfoTypes';
import { useAccountTable } from '../../hooks/useAccountTable';

const tableColumns = [
  '고객명',
  '브로커 명',
  '계좌번호',
  '계좌상태',
  '계좌명',
  '평가금액',
  '입금금액',
  '계좌활성화여부',
  '계좌개설일',
];

export default function AccountContent() {
  const router = useRouter();
  const { query } = router;
  const { active, broker, status } = query;
  const { accountTableData, totalItems } = useAccountTable();
  const [filteredData, setFilteredData] =
    useState<AccountTableType[]>(accountTableData);
  useEffect(() => {
    setFilteredData((prev) => {
      let result = [...accountTableData];
      if (broker && broker !== 'all') {
        result = result.filter((item) => item.broker_name === broker);
      }
      if (status && status !== 'all') {
        result = result.filter((item) => item.status === status);
      }
      if (active === 'active') result = result.filter((item) => item.is_active);
      if (active === 'inactive') {
        result = result.filter((item) => !item.is_active);
      }
      return result;
    });
  }, [active, broker, status, accountTableData]);

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
