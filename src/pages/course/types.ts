type TCourseTab = "content" | "overview" | "comments" | "resources";
type TContentTabData = {
  title: string;
  duration: string;
  description: string;
  image: string;
  videoUrl: string;
};
export type { TCourseTab, TContentTabData };
