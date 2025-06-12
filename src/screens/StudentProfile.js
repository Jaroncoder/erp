import React from "react";
import Sidebar from "../components/Sidebar";
import "./StudentProfile.css";

const StudentProfile = () => {
  return (
    <div className="dashboard-container">
      {/* Use parent role to show parent-specific sidebar */}
      <Sidebar userRole="parent" />

      <div className="dashboard-content profile-container">
        <h2>Student Profile</h2>

        {/* Profile Picture */}
        <div className="profile-picture-container">
          <img
            src="/images/profile.jpg"
            alt="Student Profile"
            className="profile-picture"
          />
        </div>

        {/* Student Info Table */}
        <table>
          <tbody>
            <tr><td className="attribute">Name</td><td className="value">John Doe</td></tr>
            <tr><td className="attribute">Roll No</td><td className="value">123456</td></tr>
            <tr><td className="attribute">Register No</td><td className="value">202300000001</td></tr>
            <tr><td className="attribute">Course</td><td className="value">B.E. Computer Science</td></tr>
            <tr><td className="attribute">Batch</td><td className="value">2023 - 2027</td></tr>
            <tr><td className="attribute">Academic Year / Semester</td><td className="value">2nd Year / 4th Semester</td></tr>
            <tr><td className="attribute">DOB / Gender</td><td className="value">10-02-2004 / Male</td></tr>
            <tr><td className="attribute">Father Name / Mother Name</td><td className="value">Mr. Doe / Mrs. Doe</td></tr>
            <tr><td className="attribute">Occupation / Annual Income</td><td className="value">Engineer / ₹5,00,000</td></tr>
            <tr><td className="attribute">Residential Address</td><td className="value">Chennai, India</td></tr>
            <tr><td className="attribute">Student Contact No / Email</td><td className="value">9876543210 / johndoe@email.com</td></tr>
            <tr><td className="attribute">Parent Contact No / Email</td><td className="value">9876543211 / parent@email.com</td></tr>
            <tr><td className="attribute">Date of Admission</td><td className="value">01-08-2023</td></tr>
            <tr><td className="attribute">Community</td><td className="value">General</td></tr>
            <tr><td className="attribute">Nationality / Religion</td><td className="value">Indian / Hindu</td></tr>
            <tr><td className="attribute">Hosteller</td><td className="value">No</td></tr>
            <tr><td className="attribute">District / State</td><td className="value">Chennai / Tamil Nadu</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;
