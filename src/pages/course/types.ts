type TCourseTab = "content" | "overview" | "comments" | "resources";
type TContentTabData = {
  title: string;
  duration: string;
  description: string;
  image: string;
  videoUrl: string;
};

type TComment = {
  likes: number;
  rating: number;
  replies: TComment[];
  time_ago: string;
  user: {
    name: string;
    profile_picture: string;
  };
  review_text: string;
};
export type { TCourseTab, TContentTabData, TComment };
