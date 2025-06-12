import React, { useState } from "react";
import "./StaffAnnouncements.css";

const StaffAnnouncements = () => {
  const [announcementText, setAnnouncementText] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [announcements, setAnnouncements] = useState([]);

  // Mock Data: Classes and Students
  const classesHandled = [
    { id: "1", name: "CSE 4th Semester" },
    { id: "2", name: "CSE 2nd Semester" },
  ];

  const studentsByClass = {
    "1": [
      { id: "101", name: "John Doe" },
      { id: "102", name: "Jane Smith" },
      { id: "103", name: "Alice Johnson" },
      { id: "104", name: "Robert Wilson" },
    ],
    "2": [
      { id: "201", name: "Alex Brown" },
      { id: "202", name: "Maria Davis" },
      { id: "203", name: "David Lee" },
      { id: "204", name: "Sophia White" },
    ],
  };

  // Handle Class Selection
  const handleClassSelection = (classId) => {
    setSelectedClass(classId);
    setSelectedStudents([]); // Reset student selection
    setSelectAll(false); // Reset select all
  };

  // Handle Student Selection
  const toggleStudentSelection = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  // Handle "Select All" Option
  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedStudents(studentsByClass[selectedClass].map((s) => s.id));
    } else {
      setSelectedStudents([]);
    }
    setSelectAll(!selectAll);
  };

  // Handle Post Announcement
  const handlePostAnnouncement = () => {
    if (!announcementText.trim() || !selectedClass || selectedStudents.length === 0) return;

    const newAnnouncement = {
      text: announcementText,
      className: classesHandled.find((c) => c.id === selectedClass)?.name,
      studentIds: selectedStudents,
    };

    setAnnouncements([...announcements, newAnnouncement]);
    setAnnouncementText("");
    setSelectedClass("");
    setSelectedStudents([]);
    setSelectAll(false);
  };

  return (
    <div className="staff-announcements-container">
      <h2>Post an Announcement</h2>

      {/* Announcement Input */}
      <textarea
        placeholder="Enter announcement..."
        value={announcementText}
        onChange={(e) => setAnnouncementText(e.target.value)}
      ></textarea>

      {/* Class Selection */}
      <label>Select Class:</label>
      <select value={selectedClass} onChange={(e) => handleClassSelection(e.target.value)}>
        <option value="">-- Select Class --</option>
        {classesHandled.map((cls) => (
          <option key={cls.id} value={cls.id}>
            {cls.name}
          </option>
        ))}
      </select>

      {/* Student List */}
      {selectedClass && studentsByClass[selectedClass] && (
        <div>
          <label>
            <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            Select All
          </label>

          {studentsByClass[selectedClass].map((student) => (
            <div key={student.id}>
              <input
                type="checkbox"
                id={`student-${student.id}`}
                checked={selectedStudents.includes(student.id)}
                onChange={() => toggleStudentSelection(student.id)}
              />
              <label htmlFor={`student-${student.id}`}>{student.name}</label>
            </div>
          ))}
        </div>
      )}

      {/* Post Button */}
      <button onClick={handlePostAnnouncement}>Post Announcement</button>

      {/* Past Announcements */}
      <h3>Past Announcements</h3>
      <ul>
        {announcements.map((a, index) => (
          <li key={index}>
            <p>{a.text}</p>
            <small>To {a.className}, Students: {a.studentIds.length}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffAnnouncements;
