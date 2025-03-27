const CourseItem = ({ course, onEnroll }) => {
    return (
      <div className="course-item">
        <img src={course.image} alt={course.name} />
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <button onClick={() => onEnroll(course)}>Enroll</button>
      </div>
    );
  };
  
  export default CourseItem;
  