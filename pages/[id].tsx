import React from 'react';
import MainLayout from '../components/MainLayout';
import SEO from '../components/SEO';
import UserInfo from '../components/user/UserInfo';

export default function UserDetail() {
  return (
    <>
      <SEO text="8팀 마지막 과제" />
      <MainLayout>
        <UserInfo />
      </MainLayout>
    </>
  );
}
