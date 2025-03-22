import { TContentTabData, TCourseTab } from "./types";

const CourseTab: TCourseTab[] = [
  "content",
  "overview",
  "comments",
  "resources",
];

const ContentTabData: TContentTabData[] = [
  {
    title: "Introduction",
    duration: "3 minutes, 33 seconds",
    description:
      "Before moving into the basic principles of arduino design, I would like to introduce myself and about the course",
    image: "/introduction.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Arduino Pack",
    duration: "3 minutes, 33 seconds",
    description:
      "Before moving into the basic principles of arduino design, I would like to introduce myself and about the course",
    image: "/arduino-pack.jpg",
    videoUrl: "/videos/arduino-pack.mp4",
  },
  {
    title: "The Resistance",
    duration: "3 minutes, 33 seconds",
    description:
      "Before moving into the basic principles of arduino design, I would like to introduce myself and about the course",
    image: "/resistance.jpg",
    videoUrl: "/videos/resistance.mp4",
  },
  {
    title: "Introduction",
    duration: "3 minutes, 33 seconds",
    description:
      "Before moving into the basic principles of arduino design, I would like to introduce myself and about the course",
    image: "/resistance.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    title: "Final Project",
    duration: "3 minutes, 33 seconds",
    description:
      "Before moving into the basic principles of arduino design, I would like to introduce myself and about the course",
    image: "/resistance.jpg",
    videoUrl: "/videos/resistance.mp4",
  },
];

export { CourseTab, ContentTabData };
