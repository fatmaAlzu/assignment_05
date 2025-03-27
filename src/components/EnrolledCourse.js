import PropTypes from 'prop-types';

const EnrolledCourse = ({ course }) => {
  return (
    <div className="enrolled-course">
      <h4>{course.name}</h4>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration}</p>
    </div>
  );
};

EnrolledCourse.propTypes = {
  course: PropTypes.object.isRequired,
};

export default EnrolledCourse;