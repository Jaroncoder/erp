import React, { useState } from "react";
import "./StaffStudentAnalysis.css";

const StaffStudentAnalysis = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);

  const classList = ["CSE 4th Semester", "CSE 2nd Semester"];
  const studentList = {
    "CSE 4th Semester": [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
    ],
    "CSE 2nd Semester": [
      { id: 3, name: "Alex Brown" },
      { id: 4, name: "Maria Davis" },
    ],
  };

  const studentData = {
    1: {
      name: "John Doe",
      rollNo: "21CSE001",
      attendance: "85%",
      avgMarks: "78%",
      subjectWiseMarks: {
        Mathematics: 80,
        Physics: 75,
        Programming: 78,
        DBMS: 79,
      },
      projectScore: "82%",
      participation: "Active in Hackathons and Clubs",
    },
    2: {
      name: "Jane Smith",
      rollNo: "21CSE002",
      attendance: "92%",
      avgMarks: "88%",
      subjectWiseMarks: {
        Mathematics: 90,
        Physics: 86,
        Programming: 87,
        DBMS: 89,
      },
      projectScore: "90%",
      participation: "Participated in Paper Presentations",
    },
    3: {
      name: "Alex Brown",
      rollNo: "21CSE003",
      attendance: "76%",
      avgMarks: "71%",
      subjectWiseMarks: {
        Mathematics: 70,
        Physics: 72,
        Programming: 68,
        DBMS: 74,
      },
      projectScore: "65%",
      participation: "Member of Coding Club",
    },
    4: {
      name: "Maria Davis",
      rollNo: "21CSE004",
      attendance: "89%",
      avgMarks: "80%",
      subjectWiseMarks: {
        Mathematics: 82,
        Physics: 78,
        Programming: 79,
        DBMS: 81,
      },
      projectScore: "83%",
      participation: "Volunteered in Tech Fest",
    },
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedStudent("");
    setStudentDetails(null);
  };

  const handleStudentChange = (e) => {
    const studentId = e.target.value;
    setSelectedStudent(studentId);
    setStudentDetails(studentData[studentId]);
  };

  return (
    <div className="student-analysis-container">
      <h2>Student Analysis</h2>

      {/* Class Selection */}
      <label>Select Class:</label>
      <select value={selectedClass} onChange={handleClassChange}>
        <option value="">-- Select Class --</option>
        {classList.map((className) => (
          <option key={className} value={className}>
            {className}
          </option>
        ))}
      </select>

      {/* Student Selection */}
      {selectedClass && (
        <>
          <label>Select Student:</label>
          <select value={selectedStudent} onChange={handleStudentChange}>
            <option value="">-- Select Student --</option>
            {studentList[selectedClass]?.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </select>
        </>
      )}

      {/* Student Details */}
      {studentDetails && (
        <div className="student-details">
          <h3>Student Performance Metrics</h3>
          <p><strong>Name:</strong> {studentDetails.name}</p>
          <p><strong>Roll No:</strong> {studentDetails.rollNo}</p>
          <p><strong>Attendance:</strong> {studentDetails.attendance}</p>
          <p><strong>Average Marks:</strong> {studentDetails.avgMarks}</p>
          <p><strong>Project Score:</strong> {studentDetails.projectScore}</p>
          <p><strong>Participation:</strong> {studentDetails.participation}</p>

          <h4>Subject-wise Marks</h4>
          {studentDetails.subjectWiseMarks ? (
            <ul>
              {Object.entries(studentDetails.subjectWiseMarks).map(
                ([subject, mark], index) => (
                  <li key={index}>
                    <strong>{subject}:</strong> {mark}%
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>No subject-wise marks available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default StaffStudentAnalysis;
