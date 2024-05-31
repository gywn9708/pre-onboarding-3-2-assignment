import { UserSettingType, UserType } from '../models/InfoTypes';

type FormInfoType = {
  name: string;
  email: string;
  password: string;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  age: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  address: string;
  detail_address: string;
};

const formatNewUser = (formInfo: FormInfoType) => {
  const { name, email, gender_origin, birth_date, phone_number, password } =
    formInfo;
  const user: UserType = {
    email,
    password,
    id: Date.now(),
    uuid: Date.now().toString(),
    photo: '',
    name,
    age: +formInfo.age,
    gender_origin,
    birth_date,
    phone_number,
    last_login: new Date().toString(),
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
    detail_address: formInfo.detail_address,
    address: formInfo.address,
  };
  const userSetting: UserSettingType = {
    id: Date.now(),
    uuid: Date.now().toString(),
    allow_marketing_push: formInfo.allow_marketing_push,
    allow_invest_push: formInfo.allow_invest_push,
    is_active: true,
    is_staff: formInfo.is_staff,
    created_at: new Date().toString(),
    updated_at: new Date().toString(),
  };
  return { user, userSetting };
};

export { formatNewUser };
