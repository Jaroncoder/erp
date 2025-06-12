import React from "react";
import { useParams } from "react-router-dom";
import "./UploadPage.css";

const UploadPage = () => {
  const { courseCode } = useParams(); // Get the course code from URL

  // Sample faculty data (can be dynamic later)
  const facultyName = "Dr. A. Kumar"; // Example faculty name

  // Sample data for marks
  const sampleData = [
    { activity: "CAT Exam", obtainedMarks: 85, maxMarks: 100 },
    { activity: "Concept Test", obtainedMarks: 78, maxMarks: 100 },
    { activity: "Activity 1", obtainedMarks: 92, maxMarks: 100 },
    { activity: "Activity 2", obtainedMarks: 88, maxMarks: 100 },
  ];

  return (
    <div className="upload-container">
      <h2>Marks for {courseCode}</h2>
      <p className="faculty-name">Faculty: {facultyName}</p> {/* Faculty Name */}
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Obtained Marks</th>
            <th>Max Marks</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.activity}</td>
              <td>{entry.obtainedMarks}</td>
              <td>{entry.maxMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadPage;
