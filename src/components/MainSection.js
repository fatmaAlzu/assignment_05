import { useState, useEffect } from "react";
import courses from "../data/courses";
import testimonials from "../data/testimonials";

const MainSection = () => {
    const [featuredCourse, setFeaturedCourse] = useState([]);
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        const shufffledCourses = courses.sort(() => 0.5 - Math.random());
        setFeaturedCourse(shufffledCourses.slice(0, 3));

        const shuffledTestimonials = testimonials.sort(() => 0.5 - Math.random());
        setRandomTestimonials(shuffledTestimonials.slice(0, 2));
    }
    , []);

    return (
        <main className = "main-section">
            <section className = "about">
                <h2>About LMS</h2>
                <p>Our Learning Management System helps students access quality courses and track progress.</p>
            </section>

            <section className = "featured-courses">
                <h2>Featured Courses</h2>
                <div className = "courses-list">
                    {featuredCourse.map((course) => (
                        <div key = {course.id} className = "course">
                            <img src = {course.image} alt = {course.title} />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            
                        </div>
                    ))}
                </div>
            </section>

            <section className = "testimonials">
                <h2>What our Students Say:</h2>
                <div className="testimonial-list">
                    {randomTestimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                     <p>"{testimonial.review}"</p>
                     <h4>- {testimonial.name}</h4>
                     <p>{testimonial.rating} ★</p>
                    </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MainSection;
