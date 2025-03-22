import CourseDetails from "./CourseDetails";
import { CourseBodyWrapper } from "./CourseBodyWrapper";

export default function CourseBody() {
  return (
    <CourseBodyWrapper className="cbw">
      <div className="cbw-wrapper">
        <CourseDetails />
        {/* <CourseContent /> */}
      </div>
    </CourseBodyWrapper>
  );
}
