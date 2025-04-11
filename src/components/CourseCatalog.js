import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";

const CourseCatalog = ({ enrolledCourses, setEnrolledCourses }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };

    fetchCourses();

    
    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, [setEnrolledCourses]);

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
    </div>
  );
};

export default CourseCatalog;