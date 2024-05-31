import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useInfo } from './useInfo';
import { AccountTableType } from '../models/InfoTypes';
import { formatAccountTableData } from '../utils/formatAccountTableData';
import { useAllUser } from './useUsers';
import {
  useAllAccounts,
  useAccountsOnPage,
  useTargetAccount,
} from './useAccounts';

export const useAccountTable = () => {
  const infoService = useInfo();
  const router = useRouter();
  const { q, page } = router.query;
  const query = typeof q === 'string' ? q : q?.join('');
  const currPage = typeof page === 'string' ? page : page?.join('');
  const [accountTableData, setAccountTableData] = useState<AccountTableType[]>(
    []
  );
  const { data: allUsers } = useAllUser(infoService);
  const { data: allAccountData } = useAllAccounts(infoService);
  const { data: accountData } = useAccountsOnPage(currPage, infoService);
  const { data: targetAccount } = useTargetAccount(query, infoService);

  const totalItems = allAccountData?.length || 0;

  useEffect(() => {
    if (!q && allUsers && accountData) {
      const formattedTableData = formatAccountTableData(allUsers, accountData);
      setAccountTableData(formattedTableData);
    }
  }, [q, allUsers, accountData]);
  useEffect(() => {
    if (q && allUsers && targetAccount) {
      const formattedTableData = formatAccountTableData(
        allUsers,
        targetAccount
      );
      setAccountTableData(formattedTableData);
    }
  }, [q, allUsers, targetAccount]);
  return { accountTableData, totalItems };
};
