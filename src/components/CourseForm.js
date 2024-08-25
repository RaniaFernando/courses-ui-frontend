import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [yearOfDelivery, setYearOfDelivery] = useState('');
    const [semesterOfDelivery, setSemesterOfDelivery] = useState('1'); // Default to 'First' semester

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Make API call to create course
        try {
            await axios.post('http://localhost:8000/api/courses/', { 
                title: courseTitle,
                course_code: courseCode,
                description: courseDescription,
                year_of_delivery: yearOfDelivery,
                semester_of_delivery: semesterOfDelivery 
            });
            alert('Course created successfully');
            // Reset form
            setCourseTitle('');
            setCourseCode('');
            setCourseDescription('');
            setYearOfDelivery('');
            setSemesterOfDelivery('1');
        } catch (error) {
            console.error('There was an error creating the course!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Course Title:
                <input
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Course Code:
                <input
                    type="text"
                    value={courseCode}
                    onChange={(e) => setCourseCode(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Description:
                <textarea
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Year of Delivery:
                <input
                    type="number"
                    value={yearOfDelivery}
                    onChange={(e) => setYearOfDelivery(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Semester of Delivery:
                <select 
                    value={semesterOfDelivery} 
                    onChange={(e) => setSemesterOfDelivery(e.target.value)}
                    required
                >
                    <option value="1">First</option>
                    <option value="2">Second</option>
                </select>
            </label>
            <br />
            <button type="submit">Create Course</button>
        </form>
    );
};

export default CourseForm;
