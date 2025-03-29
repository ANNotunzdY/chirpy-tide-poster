
import React, { useState } from 'react';
import { MessageSquare, Heart, Share } from 'lucide-react';
import { Tweet } from '@/types';

interface TweetCardProps {
  tweet: Tweet;
}

const TweetCard = ({ tweet }: TweetCardProps) => {
  const [isLiked, setIsLiked] = useState(tweet.isLiked);
  const [likeCount, setLikeCount] = useState(tweet.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ja-JP', { month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <div className="twitter-card p-4 mb-4">
      <div className="flex space-x-3">
        <img 
          src={tweet.avatar} 
          alt={tweet.displayName} 
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <h3 className="font-bold">{tweet.displayName}</h3>
            <span className="text-gray-500">@{tweet.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{formatDate(tweet.createdAt)}</span>
          </div>
          <p className="mt-2 mb-3">{tweet.text}</p>
          <div className="flex justify-between max-w-md text-gray-500">
            <button className="flex items-center space-x-1 hover:text-twitter-blue">
              <MessageSquare size={18} />
              <span>{tweet.comments}</span>
            </button>
            <button 
              className={`flex items-center space-x-1 ${isLiked ? 'text-red-500' : 'hover:text-red-500'}`}
              onClick={handleLike}
            >
              <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
              <span>{likeCount}</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-twitter-blue">
              <Share size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
