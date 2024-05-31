import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useInfo } from './useInfo';
import { formatUserTableData } from '../utils/formatUserTableData';
import { UserTableType } from '../models/InfoTypes';
import { useTargetUser, useUsersOnPage } from './useUsers';
import { useAllUserSetting, useUserSettingOnPage } from './useUserSetting';
import { useAllAccounts } from './useAccounts';

export const useFormatUserTable = () => {
  const [userTableData, setUserTableData] = useState<UserTableType[]>([]);
  const router = useRouter();
  const { q, page } = router.query;
  const query = typeof q === 'string' ? q : q?.join('');
  const currPage = typeof page === 'string' ? page : page?.join('');
  const infoService = useInfo();

  const { data: userData } = useUsersOnPage(currPage, infoService);
  const { data: targetUser } = useTargetUser(query, infoService);
  const { data: settingData } = useUserSettingOnPage(currPage, infoService);
  const { data: allAccountData } = useAllAccounts(infoService);
  const { data: allUserSetting } = useAllUserSetting(infoService);
  useEffect(() => {
    if (!q) {
      if (userData && settingData && allAccountData) {
        const formattedTableData = formatUserTableData(
          userData,
          settingData,
          allAccountData
        );
        setUserTableData(formattedTableData);
      }
    }
  }, [q, userData, settingData, allAccountData]);

  useEffect(() => {
    if (q) {
      if (targetUser && allUserSetting && allAccountData) {
        const targetUUIDS = targetUser?.map((item) => item.uuid);
        const targetUserSetting = targetUUIDS?.map((uuid) => {
          const target = allUserSetting?.find(
            (setting) => setting.uuid === uuid
          );
          if (!target) {
            throw new Error('not matched setting');
          }
          return target;
        });
        const formattedTableData = formatUserTableData(
          targetUser,
          targetUserSetting,
          allAccountData
        );
        setUserTableData(formattedTableData);
      }
    }
  }, [q, targetUser, allUserSetting, allAccountData]);
  return { totalItems: allUserSetting?.length || 0, userTableData };
};
