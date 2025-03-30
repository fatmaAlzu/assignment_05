import PropTypes from 'prop-types';

const EnrolledCourse = ({ course, onDrop }) => {
  return (
    <div className="enrolled-course">
      <h4>{course.name}</h4>
      <p>Instructor: {course.instructor}</p>
      <p>Credit Hours: {course.creditHours}</p>
      <button onClick={() => onDrop(course.id)}>Drop Course</button>
    </div>
  );
};

EnrolledCourse.propTypes = {
  course: PropTypes.object.isRequired,
  onDrop: PropTypes.func.isRequired,
};

export default EnrolledCourse;
