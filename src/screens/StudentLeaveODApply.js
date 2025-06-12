import React, { useState } from "react";
import StudentLayout from "../layouts/StudentLayout";
import "./StudentLeaveODApply.css";

const StudentLeaveODApply = () => {
  // Form State
  const [applicationType, setApplicationType] = useState("Leave");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [applications, setApplications] = useState([
    {
      id: 1,
      type: "Leave",
      startDate: "2025-03-01",
      endDate: "2025-03-03",
      reason: "Medical Leave",
      status: "Approved",
    },
    {
      id: 2,
      type: "OD",
      startDate: "2025-03-10",
      endDate: "2025-03-12",
      reason: "Technical Event Participation",
      status: "Pending",
    },
  ]);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: applications.length + 1,
      type: applicationType,
      startDate,
      endDate,
      reason,
      status: "Pending",
    };
    setApplications([...applications, newApplication]);
    alert("Application Submitted Successfully!");
    // Clear Form
    setApplicationType("Leave");
    setStartDate("");
    setEndDate("");
    setReason("");
  };

  return (
    <StudentLayout>
      <div className="leave-od-container">
        <h2>Leave/OD Application</h2>

        {/* Leave/OD Form */}
        <form className="leave-od-form" onSubmit={handleSubmit}>
          <label>
            Application Type:
            <select value={applicationType} onChange={(e) => setApplicationType(e.target.value)}>
              <option value="Leave">Leave</option>
              <option value="OD">OD (On-Duty)</option>
            </select>
          </label>

          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </label>

          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </label>

          <label>
            Reason:
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter your reason"
              required
            />
          </label>

          <button type="submit">Submit Application</button>
        </form>

        {/* Application History */}
        <div className="application-history">
          <h3>Application History</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((application) => (
                <tr key={application.id}>
                  <td>{application.type}</td>
                  <td>{application.startDate}</td>
                  <td>{application.endDate}</td>
                  <td>{application.reason}</td>
                  <td
                    className={
                      application.status === "Approved"
                        ? "approved"
                        : application.status === "Rejected"
                        ? "rejected"
                        : "pending"
                    }
                  >
                    {application.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StudentLayout>
  );
};

export default StudentLeaveODApply;
