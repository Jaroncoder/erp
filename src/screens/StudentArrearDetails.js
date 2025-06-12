import React from "react";
import StudentLayout from "../layouts/StudentLayout";
import "./StudentArrearDetails.css";

const StudentArrearDetails = () => {
  // Sample arrear data (You can fetch this from an API later)
  const arrearData = [
    {
      courseCode: "CS201",
      courseName: "Data Structures",
      semester: "Semester 3",
      status: "Cleared",
    },
    {
      courseCode: "CS305",
      courseName: "Operating Systems",
      semester: "Semester 5",
      status: "Not Cleared",
    },
    {
      courseCode: "MA102",
      courseName: "Calculus",
      semester: "Semester 2",
      status: "Cleared",
    },
  ];

  return (
    <StudentLayout>
      <div className="arrear-container">
        <h2>Arrear Details</h2>

        <div className="arrear-table-wrapper">
          <table className="arrear-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Semester</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {arrearData.map((arrear, index) => (
                <tr key={index}>
                  <td>{arrear.courseCode}</td>
                  <td>{arrear.courseName}</td>
                  <td>{arrear.semester}</td>
                  <td
                    className={
                      arrear.status === "Cleared"
                        ? "status-cleared"
                        : "status-not-cleared"
                    }
                  >
                    {arrear.status}
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

export default StudentArrearDetails;
