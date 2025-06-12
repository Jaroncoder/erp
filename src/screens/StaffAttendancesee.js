import React from "react";
import "./StaffAttendancesee.css";

const StaffAttendance = () => {
  const OFF_DAY_LIMIT = 2;
  const PERMISSION_LIMIT_HOURS = 2;

  const attendanceData = [
    { date: "2025-05-01", status: "Present" },
    { date: "2025-05-02", status: "Absent" },
    { date: "2025-05-03", status: "Present" },
    { date: "2025-05-04", status: "Off" },
    { date: "2025-05-05", status: "Present" }
  ];

  const permissionsUsedHours = 1.5;

  const presentDays = attendanceData.filter(a => a.status === "Present").length;
  const absentDays = attendanceData.filter(a => a.status === "Absent").length;
  const offDays = attendanceData.filter(a => a.status === "Off").length;

  const summary = {
    presentDays,
    absentDays,
    offDays,
    remainingOffDays: OFF_DAY_LIMIT - offDays,
    permissionsUsedHours,
    remainingPermissionHours: PERMISSION_LIMIT_HOURS - permissionsUsedHours,
    lossOfPay: "₹500"
  };

  return (
    <div className="attendance-container">
      <h2>Staff Attendance</h2>
      <div className="attendance-table">
        <div className="attendance-row header">
          <div className="attendance-cell">Date</div>
          <div className="attendance-cell">Status</div>
        </div>
        {attendanceData.map((entry, index) => (
          <div className="attendance-row" key={index}>
            <div className="attendance-cell">{entry.date}</div>
            <div className={`attendance-cell ${entry.status.toLowerCase()}`}>
              {entry.status}
            </div>
          </div>
        ))}
      </div>

      <h3>Attendance Summary</h3>
      <div className="summary-box">
        <div className="summary-item">
          <div className="summary-title">Days Present</div>
          <div className="summary-value">{summary.presentDays}</div>
        </div>
        <div className="summary-item">
          <div className="summary-title">Days Absent</div>
          <div className="summary-value">{summary.absentDays}</div>
        </div>
        <div className="summary-item">
          <div className="summary-title">Off Days Taken</div>
          <div className="summary-value">{summary.offDays}</div>
        </div>
        <div className="summary-item">
          <div className="summary-title">Remaining Off Days</div>
          <div className="summary-value">{summary.remainingOffDays}</div>
        </div>
        <div className="summary-item">
          <div className="summary-title">Loss of Pay</div>
          <div className="summary-value">{summary.lossOfPay}</div>
        </div>
      </div>
    </div>
  );
};

export default StaffAttendance;
