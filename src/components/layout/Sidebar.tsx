
import React from 'react';
import { MessageSquare, User, Users, Heart, Share, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  // Navigation items with their icons
  const navItems = [
    { icon: <MessageSquare />, label: 'ホーム', active: true },
    { icon: <Users />, label: 'コミュニティ' },
    { icon: <User />, label: 'プロフィール' },
  ];

  return (
    <aside className="w-64 p-4 hidden md:block">
      <div className="fixed">
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-twitter-blue text-white p-2 rounded-full">
            <MessageSquare size={24} />
          </div>
          <h1 className="text-xl font-bold">Chirpy</h1>
        </div>

        <nav className="space-y-4">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-4 p-3 rounded-full transition-colors hover:bg-gray-100 cursor-pointer ${item.active ? 'font-bold' : ''}`}
            >
              <div className={item.active ? 'text-twitter-blue' : ''}>
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}

          <Button className="w-full mt-6 twitter-btn">
            投稿する
          </Button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
