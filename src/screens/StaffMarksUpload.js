// src/screens/StaffMarksUpload.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./StaffMarksUpload.css";

const StaffMarksUpload = () => {
  const navigate = useNavigate();

  const courses = [
    { id: 1, courseCode: "CS101", courseName: "Data Structures", className: "CSE - 2nd Year" },
    { id: 2, courseCode: "CS102", courseName: "Algorithms", className: "CSE - 3rd Year" },
  ];

  const handleAddMarks = (courseId) => {
    navigate(`/add-marks/${courseId}`);
  };

  const handleViewMarks = (courseId) => {
    navigate(`/view-marks/${courseId}`);  // ✅ Dynamic route
  };

  return (
    <div className="upload-container">
      <h1>Marks Upload</h1>
      <table className="upload-table">
        <thead>
          <tr>
            <th className="table-header">Course Code</th>
            <th className="table-header">Course Name</th>
            <th className="table-header">Class</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.courseCode}</td>
              <td>{course.courseName}</td>
              <td>{course.className}</td>
              <td>
                <button className="add-btn" onClick={() => handleAddMarks(course.id)}>
                  ➕ Add Marks
                </button>
                <button className="view-btn" onClick={() => handleViewMarks(course.id)}>
                  👁️ View Marks
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffMarksUpload;
