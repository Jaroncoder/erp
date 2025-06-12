import React from "react";
import "./AttendancePage.css";

const AttendancePage = () => {
  const facultyName = "Dr. A. Kumar"; // Sample faculty data

  // Sample attendance data (Date + 8 Periods)
  const attendanceData = [
    { date: "10-03-2025", periods: ["P", "P", "A", "P", "P", "P", "P", "A"] },
    { date: "11-03-2025", periods: ["P", "P", "P", "P", "P", "A", "OD", "P"] },
    { date: "12-03-2025", periods: ["P", "P", "P", "P", "P", "P", "P", "P"] },
    { date: "13-03-2025", periods: ["P", "A", "A", "P", "P", "P", "OD", "A"] },
    { date: "14-03-2025", periods: ["P", "P", "P", "P", "A", "A", "P", "P"] },
    { date: "15-03-2025", periods: ["P", "P", "P", "P", "P", "P", "P", "P"] },
    { date: "16-03-2025", periods: ["A", "A", "A", "A", "P", "P", "P", "P"] },
    { date: "17-03-2025", periods: ["P", "P", "P", "P", "P", "P", "P", "OD"] },
  ];

  // Sample OD Information
  const odData = [
    { date: "11-03-2025", hours: "Period 6", purpose: "Inter-College Sports" },
    { date: "13-03-2025", hours: "Period 7", purpose: "Project Presentation" },
    { date: "17-03-2025", hours: "Full Day", purpose: "Tech Symposium" },
  ];

  // Calculate attendance summary
  const totalHours = attendanceData.length * 8;
  let hoursPresent = 0, hoursAbsent = 0, hoursOD = 0;

  attendanceData.forEach(entry => {
    entry.periods.forEach(status => {
      if (status === "P") hoursPresent++;
      if (status === "A") hoursAbsent++;
      if (status === "OD") hoursOD++;
    });
  });

  const attendancePercentage = ((hoursPresent / totalHours) * 100).toFixed(2);

  // Determine Attendance Status
  let attendanceStatus = "Good";
  let statusClass = "status-good";

  if (attendancePercentage < 75) {
    attendanceStatus = "Needs Improvement";
    statusClass = "status-warning";
  }
  if (attendancePercentage < 60) {
    attendanceStatus = "Critical";
    statusClass = "status-danger";
  }

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>
      <p className="faculty-name">Faculty: {facultyName}</p>

      <div className="attendance-content">
        {/* Left Side - Attendance Summary */}
        <div className="attendance-summary">
          <h3>Attendance Summary</h3>
          <p><strong>Total Working Hours:</strong> {totalHours}</p>
          <p><strong>Hours Present:</strong> {hoursPresent}</p>
          <p><strong>Hours Absent:</strong> {hoursAbsent}</p>
          <p><strong>Hours on OD:</strong> {hoursOD}</p>
          <p><strong>Attendance Percentage:</strong> {attendancePercentage}%</p>

          {/* Attendance Status */}
          <div className={`attendance-status ${statusClass}`}>
            <strong>Status:</strong> {attendanceStatus}
          </div>
        </div>

        {/* Right Side - Attendance Table */}
        <div className="attendance-table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th className="date-column">Date</th>
                {[...Array(8)].map((_, index) => (
                  <th key={index}>P{index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  {entry.periods.map((status, idx) => (
                    <td key={idx} className={`attendance-cell ${status}`}>
                      {status}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* OD Information Table */}
      <div className="od-table-container">
        <h3>OD Information</h3>
        <table className="od-table">
          <thead>
            <tr>
              <th className="date-column">Date</th>
              <th>Hours</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {odData.length > 0 ? (
              odData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.hours}</td>
                  <td>{entry.purpose}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="no-od">No OD Records</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;
