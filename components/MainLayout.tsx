import React from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MainHeader from './MainHeader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex flex-col w-5/6 bg-white h-full ">
        <MainHeader />
        {children}
        <Footer />
      </main>
    </div>
  );
}
