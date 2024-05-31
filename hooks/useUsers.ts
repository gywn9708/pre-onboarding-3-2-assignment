import { useQuery } from '@tanstack/react-query';
import { InfoService } from '../models/InfoTypes';

export const useUsersOnPage = (
  currPage: string | undefined,
  infoService: InfoService
) => {
  return useQuery(['users', currPage], () => {
    return infoService?.getUsers(currPage);
  });
};

export const useAllUser = (infoService: InfoService) => {
  return useQuery(['users', 'all'], () => {
    return infoService?.getAllUsers();
  });
};

export const useTargetUser = (
  query: string | undefined,
  infoService: InfoService
) => {
  return useQuery(['user', query], () => {
    return infoService?.getTargetUser(query);
  });
};
