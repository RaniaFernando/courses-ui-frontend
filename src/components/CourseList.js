import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/courses/');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/courses/${id}/`);
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error deleting course', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <strong>{course.title}</strong> - {course.course_code} <br />
                        <em>{course.description}</em> <br />
                        Year: {course.year_of_delivery}, Semester: {course.semester_of_delivery === 1 ? 'First' : 'Second'}
                        <br />
                        <button onClick={() => handleDelete(course.id)}>Delete</button>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
