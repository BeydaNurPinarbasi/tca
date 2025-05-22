import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}
