import React from "react";
import { useNavigate } from "react-router-dom";
import StudentLayout from "../layouts/StudentLayout";
import "./StudentSemesterMarks.css";

const StudentSemesterMarks = () => {
  const navigate = useNavigate();

  // Mock Data: Past Semester Marks
  const semesterMarks = [
    {
      semester: "Semester 1",
      marks: [
        { courseCode: "CS101", courseName: "Programming Basics", grade: "A", result: "Pass" },
        { courseCode: "MA101", courseName: "Mathematics I", grade: "B+", result: "Pass" },
      ],
    },
    {
      semester: "Semester 2",
      marks: [
        { courseCode: "CS201", courseName: "Data Structures", grade: "A", result: "Pass" },
        { courseCode: "MA201", courseName: "Mathematics II", grade: "A-", result: "Pass" },
      ],
    },
  ];

  // Redirect to LICET COE Portal for Current Semester Marks
  const handleCurrentSemesterClick = () => {
    window.location.href = "https://coe.licet.ac.in/studentlogin/login.php";
  };

  return (
    <StudentLayout>
      <div className="semester-marks-container">
        <h2>Semester Marks</h2>

        {/* View Current Semester Marks Button */}
        <button className="current-semester-btn" onClick={handleCurrentSemesterClick}>
          View Current Semester Marks
        </button>

        {semesterMarks.map((semester, index) => (
          <div key={index} className="semester-section">
            <h3>{semester.semester}</h3>
            <table>
              <thead>
                <tr>
                  <th className="table-header">Course Code</th>
                  <th className="table-header">Course Name</th>
                  <th className="table-header">Grade Obtained</th>
                  <th className="table-header">Result</th>
                </tr>
              </thead>
              <tbody>
                {semester.marks.map((mark, idx) => (
                  <tr key={idx}>
                    <td>{mark.courseCode}</td>
                    <td>{mark.courseName}</td>
                    <td>{mark.grade}</td>
                    <td>{mark.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </StudentLayout>
  );
};

export default StudentSemesterMarks;
