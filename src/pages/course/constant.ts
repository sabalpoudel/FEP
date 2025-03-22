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

const OverviewTabContent = {
  videos: 35,
  language: "English",
  students_enrolled: 59170,
  last_updated: "August 2024",
  skill_level: "Beginner Level",
  total_duration: "3 total hours",
  title: "A quick start to fundamentals of Arduino",
  description:
    "This video course is a Quick Start to learning how to build projects with Arduino. As you go through this video course, you will learn how to use tools like:\n- The Arduino IDE to write and upload code to your Arduino board,\n- Serial Monitor for debugging and communication with your Arduino,\n- Various electronic components like LEDs, sensors, and motors to bring your projects to life.\n- You will also learn how to Download and Install the Arduino IDE if you don’t have it already.\nAlthough this video course is short and simple, it is also very practical!",
};

export { CourseTab, ContentTabData, OverviewTabContent };
