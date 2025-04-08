import { useState, useEffect } from "react";

const MainSection = () => {
    const [featuredCourse, setFeaturedCourse] = useState([]);
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesRes = await fetch("http://localhost:5000/api/courses");
                const testimonialsRes = await fetch("http://localhost:5000/api/testimonials");

                const coursesData = await coursesRes.json();
                const testimonialsData = await testimonialsRes.json();

                const shuffledCourses = [...coursesData].sort(() => 0.5 - Math.random());
                setFeaturedCourse(shuffledCourses.slice(0, 3));

                const shuffledTestimonials = [...testimonialsData].sort(() => 0.5 - Math.random());
                setRandomTestimonials(shuffledTestimonials.slice(0, 2));
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <main className="main-section">
            <section className="about">
                <h2>About LMS</h2>
                <p>Our Learning Management System helps students access quality courses and track progress.</p>
            </section>

            <section className="featured-courses">
                <h2>Featured Courses</h2>
                <div className="courses-list">
                    {featuredCourse.map((course) => (
                        <div key={course.id} className="course">
                            <img src={course.image} alt={course.name} />
                            <h3>{course.name}</h3>
                            <p>{course.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Students Say:</h2>
                <div className="testimonial-list">
                    {randomTestimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <p>"{testimonial.review}"</p>
                            <h4>- {testimonial.studentName}</h4>
                            <p>{'★'.repeat(Math.floor(testimonial.rating))}{testimonial.rating % 1 ? '☆' : ''}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MainSection;
