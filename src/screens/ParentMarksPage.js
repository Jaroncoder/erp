import React from "react";
import "./ParentMarksPage.css";

const ParentMarksPage = () => {
  const marksData = [
    {
      subject: "Mathematics",
      cat1: 85,
      cat2: 88,
      assignment: 92,
      activity: 90,
      total: 89,
      remarks: "Excellent performance",
    },
    {
      subject: "Physics",
      cat1: 75,
      cat2: 78,
      assignment: 80,
      activity: 72,
      total: 76,
      remarks: "Good effort",
    },
    {
      subject: "Chemistry",
      cat1: 65,
      cat2: 70,
      assignment: 68,
      activity: 75,
      total: 70,
      remarks: "Needs improvement",
    },
    {
      subject: "English",
      cat1: 90,
      cat2: 92,
      assignment: 95,
      activity: 93,
      total: 93,
      remarks: "Outstanding",
    },
    {
      subject: "Computer Science",
      cat1: 88,
      cat2: 84,
      assignment: 86,
      activity: 89,
      total: 87,
      remarks: "Very good",
    },
  ];

  // Function to determine remark class
  const getRemarkClass = (remark) => {
    if (remark.toLowerCase().includes("outstanding")) return "remark-outstanding";
    if (remark.toLowerCase().includes("excellent")) return "remark-excellent";
    if (remark.toLowerCase().includes("very good")) return "remark-very-good";
    if (remark.toLowerCase().includes("good")) return "remark-good";
    if (remark.toLowerCase().includes("needs")) return "remark-needs-improvement";
    return "";
  };

  return (
    <div className="parent-marks-container">
      <h2>Student Marks Report</h2>
      <p className="info-text">Below is the detailed mark structure (out of 100).</p>

      <table className="marks-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>CAT 1</th>
            <th>CAT 2</th>
            <th>Assignment</th>
            <th>Activity</th>
            <th>Total (100)</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.subject}</td>
              <td>{entry.cat1}</td>
              <td>{entry.cat2}</td>
              <td>{entry.assignment}</td>
              <td>{entry.activity}</td>
              <td><strong>{entry.total}</strong></td>
              <td className={getRemarkClass(entry.remarks)}>{entry.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentMarksPage;
