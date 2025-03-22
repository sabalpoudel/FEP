import { useSearchParams } from "react-router-dom";

import { TCourseTab } from "../types";
import { CourseTab } from "../constant";
import CourseContentTab from "./CourseContentTab";
import CourseContentTabContent from "./CourseContentTabContent";
import CourseContentTabOverview from "./CourseContentTabOverview";

type TCourseContent = {};

export default function CourseContent(props: TCourseContent) {
  const {} = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const queryType = (searchParams.get("type") || "") as TCourseTab;
  const activeTab = CourseTab.includes(queryType) ? queryType : CourseTab[0];

  const toggleTab = (v: TCourseTab) => {
    if (v === activeTab) return;
    setSearchParams({ type: v });
  };

  return (
    <div className="cc">
      <CourseContentTab toggleTab={toggleTab} activeTab={activeTab} />
      {activeTab === "content" && <CourseContentTabContent />}
      {activeTab === "overview" && <CourseContentTabOverview />}
    </div>
  );
}
