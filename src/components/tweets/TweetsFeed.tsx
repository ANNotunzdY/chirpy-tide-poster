
import React, { useState } from 'react';
import TweetCard from './TweetCard';
import TweetComposer from './TweetComposer';
import { Tweet } from '@/types';
import { v4 as uuidv4 } from 'uuid';

const TweetsFeed = () => {
  // Sample initial tweet data
  const [tweets, setTweets] = useState<Tweet[]>([
    {
      id: '1',
      text: 'Reactでのウェブ開発が楽しいです！新しいTwitterクローンを作っています。#webdev #reactjs',
      username: 'dev_tanaka',
      displayName: '田中開発者',
      avatar: 'https://source.unsplash.com/100x100/?portrait,3',
      createdAt: '2023-06-15T14:35:00Z',
      likes: 42,
      comments: 5,
      isLiked: false
    },
    {
      id: '2',
      text: '今日は東京で素晴らしい天気です！公園でピクニックするのに最適な日です。 🌸 #tokyo #spring',
      username: 'tokyo_lover',
      displayName: '東京ラバー',
      avatar: 'https://source.unsplash.com/100x100/?portrait,4',
      createdAt: '2023-06-15T10:20:00Z',
      likes: 24,
      comments: 3,
      isLiked: true
    },
    {
      id: '3',
      text: '新しいプログラミング言語を学ぶのにおすすめの資料を教えてください！ #programming #learning',
      username: 'code_master',
      displayName: 'コードマスター',
      avatar: 'https://source.unsplash.com/100x100/?portrait,5',
      createdAt: '2023-06-14T22:15:00Z',
      likes: 18,
      comments: 12,
      isLiked: false
    }
  ]);

  const handleNewTweet = (text: string) => {
    const newTweet: Tweet = {
      id: uuidv4(),
      text,
      username: 'your_username',
      displayName: 'あなた',
      avatar: 'https://source.unsplash.com/100x100/?portrait,profile',
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      isLiked: false
    };

    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold">ホーム</h2>
      </div>
      
      <TweetComposer onTweetSubmit={handleNewTweet} />
      
      <div className="divide-y divide-gray-200">
        {tweets.map((tweet) => (
          <div key={tweet.id} className="px-4 py-3">
            <TweetCard tweet={tweet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetsFeed;
