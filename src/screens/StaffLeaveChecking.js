import React, { useState } from "react";
import "./StaffLeaveChecking.css";

const StaffLeaveChecking = () => {
  const [filterStatus, setFilterStatus] = useState("Pending");
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      studentName: "John Doe",
      className: "CSE 4th Semester",
      type: "Leave",
      reason: "Medical Leave",
      fromDate: "2025-04-01",
      toDate: "2025-04-03",
      periodFrom: 1,
      periodTo: 4,
      status: "Pending",
      document: "medical_certificate.pdf",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      className: "CSE 4th Semester",
      type: "OD",
      reason: "Sports Event",
      fromDate: "2025-04-02",
      toDate: "2025-04-04",
      periodFrom: 3,
      periodTo: 6,
      status: "Pending",
      document: "sports_event_permission.pdf",
    },
    {
      id: 3,
      studentName: "Alex Brown",
      className: "CSE 2nd Semester",
      type: "Leave",
      reason: "Family Function",
      fromDate: "2025-04-05",
      toDate: "2025-04-06",
      periodFrom: 1,
      periodTo: 8,
      status: "Approved",
      document: "",
    },
  ]);

  // Handle Approve / Reject
  const updateStatus = (id, newStatus) => {
    setLeaveRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  // Filter Requests
  const filteredRequests = leaveRequests.filter((req) =>
    filterStatus === "All" ? true : req.status === filterStatus
  );

  return (
    <div className="staff-leave-checking-container">
      <h2>Leave & OD Requests</h2>

      {/* Filter Options */}
      <label>Filter by Status:</label>
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>

      {/* Leave Requests Table */}
      <table className="leave-checking-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Type</th>
            <th>Reason</th>
            <th>From</th>
            <th>To</th>
            <th>Period From</th>
            <th>Period To</th>
            <th>Document</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRequests.length === 0 ? (
            <tr>
              <td colSpan="11" className="no-data">No requests found.</td>
            </tr>
          ) : (
            filteredRequests.map((req) => (
              <tr key={req.id}>
                <td>{req.studentName}</td>
                <td>{req.className}</td>
                <td>{req.type}</td>
                <td>{req.reason}</td>
                <td>{req.fromDate}</td>
                <td>{req.toDate}</td>
                <td>{req.periodFrom}</td>
                <td>{req.periodTo}</td>
                <td>
                  {req.document ? (
                    <a href={`/${req.document}`} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>
                <td className={`status ${req.status.toLowerCase()}`}>{req.status}</td>
                <td>
                  {req.status === "Pending" && (
                    <>
                      <button className="approve" onClick={() => updateStatus(req.id, "Approved")}>Approve</button>
                      <button className="reject" onClick={() => updateStatus(req.id, "Rejected")}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffLeaveChecking;
