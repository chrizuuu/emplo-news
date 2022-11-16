type numberOfLikes = string;
type isLiked = boolean;
type createdDate = Date;

interface Author {
  id: string;
  fullName: string;
}

interface Comment {
  id: string;
  content: string;
  author: Author;
  createdDate: createdDate;
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
  createdDate: createdDate;
  type: number;
}
