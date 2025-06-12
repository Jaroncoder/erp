// src/screens/StaffViewMarks.js
import React from "react";
import { useParams } from "react-router-dom";

const mockData = {
  1: [
    { name: "John Doe", CAT1: 18, ConceptTest: 9, Activity1: 10, Total: 37 },
    { name: "Jane Smith", CAT1: 17, ConceptTest: 8, Activity1: 9, Total: 34 },
  ],
  2: [
    { name: "Alice Johnson", CAT1: 20, ConceptTest: 9, Activity1: 10, Total: 39 },
    { name: "Bob Williams", CAT1: 15, ConceptTest: 7, Activity1: 8, Total: 30 },
  ]
};

const StaffViewMarks = () => {
  const { courseId } = useParams();
  const marks = mockData[courseId] || [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Marks for Course ID: {courseId}</h2>
      {marks.length === 0 ? (
        <p>No marks available for this course.</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#AE251F", color: "#fff" }}>
              <th style={thStyle}>Student Name</th>
              <th style={thStyle}>CAT 1</th>
              <th style={thStyle}>Concept Test</th>
              <th style={thStyle}>Activity 1</th>
              <th style={thStyle}>Total</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((student, index) => (
              <tr key={index}>
                <td style={tdStyle}>{student.name}</td>
                <td style={tdStyle}>{student.CAT1}</td>
                <td style={tdStyle}>{student.ConceptTest}</td>
                <td style={tdStyle}>{student.Activity1}</td>
                <td style={tdStyle}>{student.Total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const thStyle = {
  padding: "10px",
  border: "1px solid #ccc",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ccc",
};

export default StaffViewMarks;
