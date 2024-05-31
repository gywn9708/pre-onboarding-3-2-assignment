import React from 'react';
import { useRouter } from 'next/router';
import AccountContent from '../../components/account/AccountContent';
import MainLayout from '../../components/MainLayout';
import SEO from '../../components/SEO';

export default function Index() {
  return (
    <>
      <SEO text="8팀 마지막 과제" />
      <MainLayout>
        <AccountContent />
      </MainLayout>
    </>
  );
}
