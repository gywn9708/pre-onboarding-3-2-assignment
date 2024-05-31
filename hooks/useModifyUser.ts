import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { UserSettingType, UserType } from '../models/InfoTypes';
import { useInfo } from './useInfo';
import { useAllUserSetting } from './useUserSetting';

const useModifyUser = (uuid: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { page } = router.query;
  const infoService = useInfo();
  const { data }: { data: UserSettingType[] | undefined } =
    useAllUserSetting(infoService);
  const userSetting = data?.find((setting) => setting.uuid === uuid);
  const userDeleteMutation = useMutation(
    async (userId: string) => {
      return infoService?.deleteUser(userId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', page]);
      },
    }
  );
  const settingDeleteMutation = useMutation(
    async (userId: string) => {
      return infoService?.deleteUserSetting(userId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['userSetting', 'all']);
      },
    }
  );
  const nameMutation = useMutation(
    async (info: { name: string; id: string }) => {
      return infoService?.patchUserName(info);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users', page]);
      },
    }
  );

  return {
    userSetting,
    userDeleteMutation,
    settingDeleteMutation,
    nameMutation,
  };
};

export { useModifyUser };
