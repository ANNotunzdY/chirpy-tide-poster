
export interface Tweet {
  id: string;
  text: string;
  username: string;
  displayName: string;
  avatar: string;
  createdAt: string;
  likes: number;
  comments: number;
  isLiked: boolean;
}
