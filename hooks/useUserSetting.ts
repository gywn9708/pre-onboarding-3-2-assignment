import { useQuery } from '@tanstack/react-query';
import { InfoService } from '../models/InfoTypes';

export const useUserSettingOnPage = (
  currPage: string | undefined,
  infoService: InfoService
) => {
  return useQuery(['userSetting', currPage], () => {
    return infoService?.getUserSetting(currPage);
  });
};

export const useAllUserSetting = (infoService: InfoService) => {
  return useQuery(['usersetting', 'all'], () => {
    return infoService?.getAllUserSetting();
  });
};
