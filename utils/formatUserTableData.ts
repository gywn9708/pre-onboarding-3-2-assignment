import {
  AccountType,
  UserSettingType,
  UserTableType,
  UserType,
} from '../models/InfoTypes';
import { formatBoolean } from './formatBoolean';
import { formatDate } from './formatDate';
import { maskName } from './maskName';
import { maskPhoneNumber } from './maskNumber';

type AccountCountType = {
  [index: string]: number;
};

function formatUserTableData(
  userData: UserType[],
  settingData: UserSettingType[],
  accountData: AccountType[]
) {
  const { length } = settingData;
  const tableData = Array(length);
  const accountCount: AccountCountType = accountData.reduce(
    (allAcount: AccountCountType, account) => {
      if (account.user_id in allAcount) {
        allAcount[account.user_id]++;
      } else {
        allAcount[account.user_id] = 1;
      }
      return allAcount;
    },
    {}
  );

  settingData.forEach((item, idx) => {
    const {
      id,
      name,
      email,
      birth_date,
      gender_origin,
      created_at,
      last_login,
      phone_number,
      uuid,
    } = userData[idx];
    const { is_active, allow_marketing_push, is_staff } = item;
    const maskedName = maskName(name);
    const account_count = accountCount[id] || 0;
    const maskedPhoneNumber = maskPhoneNumber(phone_number);
    const formattedItem: UserTableType = {
      id,
      name: maskedName,
      account_count,
      email,
      gender_origin,
      birth_date: formatDate(birth_date),
      phone_number: maskedPhoneNumber,
      last_login: formatDate(last_login),
      allow_marketing_push: formatBoolean(allow_marketing_push),
      is_active: formatBoolean(is_active),
      created_at: formatDate(created_at),
      is_staff: formatBoolean(is_staff),
      uuid,
      kind: 'user',
    };
    tableData[idx] = formattedItem;
  });
  return tableData;
}

export { formatUserTableData };
