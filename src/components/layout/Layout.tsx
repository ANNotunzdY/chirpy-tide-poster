
import React from 'react';
import Sidebar from './Sidebar';
import TrendingPanel from './TrendingPanel';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-twitter-lightest">
      <div className="container mx-auto flex max-w-6xl">
        <Sidebar />
        <main className="flex-1 border-x border-gray-200 min-h-screen bg-white">
          {children}
        </main>
        <TrendingPanel />
      </div>
    </div>
  );
};

export default Layout;
