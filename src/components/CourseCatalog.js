import { useState } from "react";
import CourseItem from "./CourseItem";
import EnrollmentList from "./EnrollmentList";
import courses from "../data/courses";

const CourseCatalog = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.some((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>
      <EnrollmentList enrolledCourses={enrolledCourses} />
    </div>
  );
};

export default CourseCatalog;
