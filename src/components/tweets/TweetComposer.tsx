
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface TweetComposerProps {
  onTweetSubmit: (text: string) => void;
}

const TweetComposer = ({ onTweetSubmit }: TweetComposerProps) => {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (!text.trim()) {
      toast({
        title: "エラー",
        description: "投稿内容を入力してください。",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      onTweetSubmit(text);
      setText('');
      setIsSubmitting(false);
      
      toast({
        title: "投稿完了",
        description: "投稿が完了しました！",
      });
    }, 500);
  };
  
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex space-x-4">
        <img 
          src="https://source.unsplash.com/100x100/?portrait,profile" 
          alt="Your avatar" 
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <Textarea
            className="w-full resize-none border-none focus-visible:ring-0 p-0 text-lg"
            placeholder="いまどうしてる？"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={280}
          />
          
          <div className="flex justify-between items-center mt-4">
            <div className="text-twitter-blue text-sm">
              {text.length > 0 && (
                <span className={text.length >= 260 ? 'text-amber-500' : ''}>
                  {text.length}/280
                </span>
              )}
            </div>
            <Button 
              className="twitter-btn px-6"
              onClick={handleSubmit}
              disabled={isSubmitting || !text.trim()}
            >
              {isSubmitting ? '投稿中...' : '投稿する'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetComposer;
