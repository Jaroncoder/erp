import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./StudentInternalMarks.css";

const StudentInternalMarks = () => {
  const navigate = useNavigate();

  const handleUploadClick = (uploadType, courseCode) => {
    navigate(`/student-internal-marks/${courseCode}/${uploadType}`);
  };

  const sampleData = [
    { courseCode: "CS101", courseName: "Data Structures", upload1: "View Upload 1", upload2: "View Upload 2" },
    { courseCode: "CS102", courseName: "Operating Systems", upload1: "View Upload 1", upload2: "View Upload 2" },
    { courseCode: "CS103", courseName: "Database Management", upload1: "View Upload 1", upload2: "View Upload 2" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Internal Marks</h2>
        <table>
          <thead>
            <tr>
              <th className="table-header">Course Code</th>
              <th className="table-header">Course Name</th>
              <th className="table-header">Upload 1</th>
              <th className="table-header">Upload 2</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((course, index) => (
              <tr key={index}>
                <td>{course.courseCode}</td>
                <td>{course.courseName}</td>
                <td>
                  <button onClick={() => navigate("/upload-page")}>
                    {course.upload1}
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate("/upload-page")}>
                    {course.upload2}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInternalMarks;
