import { useEffect } from "react";
import CourseItem from "./CourseItem";
import EnrollmentList from "./EnrollmentList";
import courses from "../data/courses";

const CourseCatalog = ({ enrolledCourses, setEnrolledCourses }) => {
  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, [setEnrolledCourses]); // Add setEnrolledCourses to the dependency array

  const handleEnroll = (course) => {
    if (!enrolledCourses.some((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const handleDrop = (courseId) => {
    const updatedCourses = enrolledCourses.filter((course) => course.id !== courseId);
    setEnrolledCourses(updatedCourses);
  };

  return (
    <div className="course-catalog">
      <h2>Available Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} onEnroll={handleEnroll} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;