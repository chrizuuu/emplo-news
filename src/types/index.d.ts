type numberOfLikes = string;
type isLiked = boolean;
type createDate = string;

interface Author {
  id: string;
  fullName: string;
}

interface Comment {
  id: string;
  content: string;
  author: Author;
  createDate: createDate;
  numberOfLikes: numberOfLikes;
  isLiked: isLiked;
}

interface Message {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
  author: Author;
  numberOfLikes: numberOfLikes;
  isLiked: isLiked;
  createDate: createDate;
  type: number;
}
