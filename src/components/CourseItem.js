import { useState } from "react";

const CourseItem = ({ course, onEnroll }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="course-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={course.image} alt={course.name} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      {isHovered && <p>{course.description}</p>}
      <button onClick={() => onEnroll(course)}>Enroll Now</button>
    </div>
  );
};

export default CourseItem;
