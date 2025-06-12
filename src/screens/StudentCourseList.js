import React from "react";
import "./StudentCourseList.css";

const StudentCourseList = () => {
  // Sample course data with faculty information
  const courseData = [
    {
      semester: 1,
      courses: [
        { code: "CS101", name: "Introduction to Programming", credits: 4, faculty: "Dr. John Doe", status: "Completed" },
        { code: "MA101", name: "Calculus", credits: 3, faculty: "Dr. Alice Smith", status: "Completed" },
        { code: "PH101", name: "Physics", credits: 3, faculty: "Dr. Robert Brown", status: "Completed" },
      ],
    },
    {
      semester: 2,
      courses: [
        { code: "CS102", name: "Data Structures", credits: 4, faculty: "Dr. Jane Wilson", status: "Completed" },
        { code: "MA102", name: "Linear Algebra", credits: 3, faculty: "Dr. Alan White", status: "Completed" },
        { code: "EE101", name: "Basic Electronics", credits: 3, faculty: "Dr. Susan Green", status: "Completed" },
      ],
    },
    {
      semester: 3,
      courses: [
        { code: "CS201", name: "Object-Oriented Programming", credits: 4, faculty: "Dr. Mark Taylor", status: "Completed" },
        { code: "CS202", name: "Database Management", credits: 3, faculty: "Dr. Emma Davis", status: "Completed" },
        { code: "CS203", name: "Operating Systems", credits: 4, faculty: "Dr. Liam Harris", status: "Completed" },
      ],
    },
    {
      semester: 4,
      courses: [
        { code: "CS301", name: "Computer Networks", credits: 4, faculty: "Dr. Olivia Brown", status: "In Progress" },
        { code: "CS302", name: "Software Engineering", credits: 3, faculty: "Dr. William Clark", status: "In Progress" },
        { code: "CS303", name: "Theory of Computation", credits: 3, faculty: "Dr. Sophia Lee", status: "In Progress" },
      ],
    },
  ];

  return (
    <div className="course-list-container">
      <h2>Course List</h2>
      {courseData.map((semesterData) => (
        <div key={semesterData.semester} className="semester-section">
          <h3>Semester {semesterData.semester}</h3>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credits</th>
                <th>Faculty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {semesterData.courses.map((course) => (
                <tr key={course.code}>
                  <td>{course.code}</td>
                  <td>{course.name}</td>
                  <td>{course.credits}</td>
                  <td>{course.faculty}</td>
                  <td
                    className={course.status === "Completed" ? "completed" : "in-progress"}
                  >
                    {course.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default StudentCourseList;
