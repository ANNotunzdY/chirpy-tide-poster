
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TrendingPanel = () => {
  // Sample trending topics
  const trendingTopics = [
    { topic: 'テクノロジー', tweets: '2,500' },
    { topic: 'アニメ', tweets: '1,800' },
    { topic: '東京', tweets: '1,200' },
    { topic: 'プログラミング', tweets: '950' },
  ];

  // Sample suggested users
  const suggestedUsers = [
    { name: '山田太郎', username: '@yamada_taro', avatar: 'https://source.unsplash.com/100x100/?portrait,1' },
    { name: '佐藤花子', username: '@sato_hanako', avatar: 'https://source.unsplash.com/100x100/?portrait,2' },
  ];

  return (
    <aside className="w-80 p-4 hidden lg:block space-y-6">
      <div className="fixed w-72">
        <div className="relative mb-6">
          <Input 
            className="rounded-full bg-gray-100 py-3 pl-12 pr-4 w-full"
            placeholder="検索" 
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-6">
          <h2 className="font-bold text-lg mb-4">トレンド</h2>
          <div className="space-y-4">
            {trendingTopics.map((topic, index) => (
              <div key={index} className="cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <p className="text-sm text-gray-500">トレンド {index + 1}</p>
                <p className="font-medium">{topic.topic}</p>
                <p className="text-sm text-gray-500">{topic.tweets} 投稿</p>
              </div>
            ))}
          </div>
          <Button variant="link" className="text-twitter-blue mt-2 p-0">
            もっと見る
          </Button>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h2 className="font-bold text-lg mb-4">おすすめユーザー</h2>
          <div className="space-y-4">
            {suggestedUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.username}</p>
                  </div>
                </div>
                <Button className="rounded-full text-xs bg-black text-white hover:bg-black/90">
                  フォロー
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TrendingPanel;
