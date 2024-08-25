import React, { useState } from 'react';
import './CourseManagement.css'; // Assuming you will also add a CSS file for styling

const CourseManagement = () => {
    const [title, setTitle] = useState('');
    const [code, setCode] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('1');
    const [courses, setCourses] = useState([
        { id: 1, title: 'Data Structures', code: 'CS102', description: 'Data Structures course', year: '2024', semester: '1' },
        { id: 2, title: 'Database', code: '1001', description: 'Basics of Database Management', year: '2023', semester: '2' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCourse = { id: Date.now(), title, code, description, year, semester };
        setCourses([...courses, newCourse]);
        setTitle('');
        setCode('');
        setDescription('');
        setYear('');
        setSemester('1');
    };

    const handleDelete = (id) => {
        setCourses(courses.filter(course => course.id !== id));
    };

    return (
        <div>
            <h1>Course Management</h1>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Course Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

                    <label htmlFor="code">Course Code:</label>
                    <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} required />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" required></textarea>

                    <label htmlFor="year">Year of Delivery:</label>
                    <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} required />

                    <label htmlFor="semester">Semester of Delivery:</label>
                    <select id="semester" value={semester} onChange={(e) => setSemester(e.target.value)} required>
                        <option value="1">First</option>
                        <option value="2">Second</option>
                    </select>

                    <button type="submit">Create Course</button>
                </form>
            </div>

            <ul className="course-list">
                {courses.map(course => (
                    <li key={course.id}>
                        <div>
                            <h3>{course.title} - {course.code}</h3>
                            <p>{course.description}<br />Year: {course.year}, Semester: {course.semester === '1' ? 'First' : 'Second'}</p>
                        </div>
                        <button onClick={() => handleDelete(course.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseManagement;
