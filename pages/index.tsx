import type { NextPage } from 'next';
import MainLayout from '../components/MainLayout';
import SEO from '../components/SEO';
import UserContent from '../components/user/UserContent';

const Home: NextPage = () => {
  return (
    <>
      <SEO text="8팀 마지막 과제" />
      <MainLayout>
        <UserContent />
      </MainLayout>
    </>
  );
};

export default Home;
