import React, { useState } from 'react';
import ModalBtn from './ModalBtn';
import ModalInput from './ModalInput';
import { useCreateUser } from '../../hooks/useCreateUser';
import { formatNewUser } from '../../utils/formatNewUser';
import ModalSelect from './ModalSelect';

interface ModalProps {
  toggleModal: () => void;
}

const ModalBtns = [
  {
    name: 'allow_marketing_push',
    label: '혜택 수신동의 여부',
  },
  {
    name: 'allow_invest_push',
    label: '투자 동의 여부',
  },
  {
    name: 'is_staff',
    label: '임원여부',
  },
];

const initialState = {
  name: '',
  email: '',
  password: '',
  gender_origin: 1,
  birth_date: '',
  phone_number: '',
  age: '',
  allow_marketing_push: false,
  allow_invest_push: false,
  is_active: false,
  is_staff: false,
  address: '',
  detail_address: '',
};

export default function Modal({ toggleModal }: ModalProps) {
  const [formInfo, setFormInfo] = useState(initialState);
  const { userCreateMutation, settingCreateMutation } = useCreateUser();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user, userSetting } = formatNewUser(formInfo);
    userCreateMutation.mutate(user);
    settingCreateMutation.mutate(userSetting);
    toggleModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.currentTarget;
    if (checked) {
      setFormInfo((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setFormInfo((prev) => ({ ...prev, [name]: +value }));
  };

  return (
    <form
      className="w-full max-w-2xl  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded p-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex -mx-3 mb-6">
        <ModalInput
          value="Name"
          type="text"
          id="name"
          placeholder="이름"
          onChange={handleInputChange}
        />
        <ModalInput
          value="Email"
          type="email"
          id="email"
          placeholder="x@xxx.com"
          onChange={handleInputChange}
        />
        <ModalInput
          value="Password"
          type="password"
          id="password"
          placeholder="3자이상 비밀번호"
          onChange={handleInputChange}
        />
      </div>
      <div className="w-full flex -mx-3 mb-2">
        <ModalSelect onChange={handleSelectChange} />
        <ModalInput
          value="생년월일"
          type="date"
          id="birth_date"
          placeholder="yyyy-mm-dd"
          onChange={handleInputChange}
        />
        <ModalInput
          value="나이"
          type="text"
          id="age"
          placeholder=""
          onChange={handleInputChange}
        />
      </div>
      <div className="flex -mx-3 mb-6">
        <ModalInput
          value="휴대폰번호"
          type="text"
          id="phone_number"
          placeholder="xxx-xxxx-xxx"
          onChange={handleInputChange}
        />
        <ModalInput
          value="주소"
          type="text"
          id="address"
          placeholder=""
          onChange={handleInputChange}
        />
        <ModalInput
          value="상세주소"
          type="text"
          id="detail_address"
          placeholder=""
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        {ModalBtns.map((btn) => (
          <ModalBtn
            key={btn.label}
            name={btn.name}
            label={btn.label}
            onChange={handleInputChange}
          />
        ))}
      </div>
      <button
        type="submit"
        className="mt-3 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        제출
      </button>
    </form>
  );
}
