import EnrolledCourse from "./EnrolledCourse";

const EnrollmentList = ({ enrolledCourses }) => {
  return (
    <div className="enrollment-list">
      <h2>Enrolled Courses</h2>
      {enrolledCourses.length > 0 ? (
        enrolledCourses.map((course) => <EnrolledCourse key={course.id} course={course} />)
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default EnrollmentList