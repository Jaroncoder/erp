import React from "react";
import StudentLayout from "../layouts/StudentLayout";
import "./StudentClubAttendance.css";

const StudentClubAttendance = () => {
  // Mock data: Club details and attendance records
  const clubDetails = {
    clubName: "Coding Club",
    facultyIncharge: "Dr. Jane Smith",
  };

  const attendanceRecords = [
    { date: "2025-03-01", eventName: "Hackathon", status: "P", hours: 4 },
    { date: "2025-03-08", eventName: "Coding Workshop", status: "A", hours: 3 },
    { date: "2025-03-15", eventName: "AI Seminar", status: "P", hours: 5 },
    { date: "2025-03-22", eventName: "Web Development Bootcamp", status: "P", hours: 6 },
    { date: "2025-03-29", eventName: "Tech Talk", status: "A", hours: 2 },
  ];

  // Calculate attendance summary
  const totalHours = attendanceRecords.reduce((sum, record) => sum + record.hours, 0);
  const hoursPresent = attendanceRecords
    .filter((record) => record.status === "P")
    .reduce((sum, record) => sum + record.hours, 0);
  const hoursAbsent = totalHours - hoursPresent;

  return (
    <StudentLayout>
      <div className="club-attendance-container">
        <h2>Club Attendance</h2>

        {/* Club Details */}
        <div className="club-details">
          <p><strong>Club Name:</strong> {clubDetails.clubName}</p>
          <p><strong>Faculty Incharge:</strong> {clubDetails.facultyIncharge}</p>
        </div>

        {/* Attendance Table */}
        <div className="attendance-table">
          <h3>Attendance Records</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event Name</th>
                <th>Attendance</th>
                <th>No. of Hours</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index}>
                  <td>{record.date}</td>
                  <td>{record.eventName}</td>
                  <td>{record.status}</td>
                  <td>{record.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Attendance Summary */}
        <div className="attendance-summary">
          <p><strong>Total Hours of Events:</strong> {totalHours}</p>
          <p><strong>Hours Present:</strong> {hoursPresent}</p>
          <p><strong>Hours Absent:</strong> {hoursAbsent}</p>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentClubAttendance;
