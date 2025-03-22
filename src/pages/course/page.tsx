import CourseHeader from "./component/CourseHeader";
import { CoursePageWrapper } from "./CoursePageWrapper";
import CourseLayout from "../../components/layouts/CourseLayout";
import CourseBody from "./component/CourseBody";

export default function CoursePage() {
  return (
    <CourseLayout>
      <CoursePageWrapper className="cpw">
        <CourseHeader />
        <CourseBody />
      </CoursePageWrapper>
    </CourseLayout>
  );
}
