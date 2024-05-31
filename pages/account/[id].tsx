import React from 'react';
import AccountInfo from '../../components/account/AccountInfo';
import MainLayout from '../../components/MainLayout';
import SEO from '../../components/SEO';

export default function DetailAccount() {
  return (
    <>
      <SEO text="계좌 상세페이지 " />
      <MainLayout>
        <AccountInfo />
      </MainLayout>
    </>
  );
}
