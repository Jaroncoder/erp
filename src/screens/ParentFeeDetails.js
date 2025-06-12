import React from "react";
import "./ParentFeeDetails.css";

const ParentFeeDetails = () => {
  const student = {
    name: "John Doe",
    rollNo: "22CS101",
    registerNo: "REG20221001",
    admissionType: "Counseling", // or "Management"
    currentSemester: 4,
  };

  const feeData = [
    { semester: 1, amount: 55000, status: "Paid" },
    { semester: 2, amount: 55000, status: "Paid" },
    { semester: 3, amount: 58000, status: "Paid" },
    { semester: 4, amount: 58000, status: "Not Paid" }, // Current semester
  ];

  return (
    <div className="fee-container">
      <h2>Fee Details</h2>
      
      <div className="student-info">
        <p><strong>Student Name:</strong> {student.name}</p>
        <p><strong>Roll Number:</strong> {student.rollNo}</p>
        <p><strong>Register Number:</strong> {student.registerNo}</p>
        <p><strong>Admission Type:</strong> {student.admissionType}</p>
        <p><strong>Current Semester:</strong> {student.currentSemester}</p>
      </div>

      <table className="fee-table">
        <thead>
          <tr>
            <th>Semester</th>
            <th>Fee Amount (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((fee, index) => (
            <tr key={index}>
              <td>{fee.semester}</td>
              <td>{fee.amount}</td>
              <td className={fee.status === "Paid" ? "paid" : "not-paid"}>
                {fee.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentFeeDetails;
