import { useEffect } from "react";
import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses, onDrop }) => {
  const totalCredits = enrolledCourses.reduce((sum, course) => sum + course.creditHours, 0);

  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  return (
    <div className="enrollment-list">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length > 0 ? (
        <>
          {enrolledCourses.map((course) => (
            <EnrolledCourse key={course.id} course={course} onDrop={onDrop} />
          ))}
          <p><strong>Total Credit Hours:</strong> {totalCredits}</p>
        </>
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default EnrollmentList;
