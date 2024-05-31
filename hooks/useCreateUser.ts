import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { UserSettingType, UserType } from '../models/InfoTypes';
import { useInfo } from './useInfo';

const useCreateUser = () => {
  const queryClient = useQueryClient();
  const infoService = useInfo();
  const router = useRouter();
  const { page } = router.query;
  const userCreateMutation = useMutation(
    async (user: UserType) => {
      return infoService?.postUser(user);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', 'all']);
        queryClient.invalidateQueries(['users', page]);
      },
    }
  );
  const settingCreateMutation = useMutation(
    async (setting: UserSettingType) => {
      return infoService?.postSetting(setting);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userSetting', page]);
        queryClient.invalidateQueries(['userSetting', 'all']);
      },
    }
  );
  return { userCreateMutation, settingCreateMutation };
};

export { useCreateUser };
