import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CourseCatalog from "../components/CourseCatalog";
import EnrollmentList from "../components/EnrollmentList";

const CoursesPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  return (
    <div className="courses-page">
      <Header />
      <div className="content">
        <CourseCatalog enrolledCourses={enrolledCourses} setEnrolledCourses={setEnrolledCourses} />
        <EnrollmentList enrolledCourses={enrolledCourses} onDrop={(courseId) => 
          setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId))
        } />
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
