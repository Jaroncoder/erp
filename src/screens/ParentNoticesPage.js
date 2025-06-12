import React from "react";
import "./ParentNoticesPage.css";

const ParentNoticesPage = () => {
  const parentNotices = [
    {
      date: "2025-06-10",
      title: "Parent-Teacher Meeting Scheduled",
      description:
        "A Parent-Teacher meeting for all departments will be held on 15th June 2025 at 10:00 AM in the Seminar Hall. Attendance is compulsory.",
      issuedBy: "Principal"
    },
    {
      date: "2025-06-05",
      title: "Fee Payment Reminder",
      description:
        "Parents are requested to ensure that the fee for the current semester is paid before 20th June 2025 to avoid late charges.",
      issuedBy: "Accounts Department"
    },
    {
      date: "2025-06-01",
      title: "Holiday Notification",
      description:
        "The college will remain closed on 3rd June 2025 due to a government-declared holiday (Polling Day).",
      issuedBy: "College Administration"
    }
  ];

  return (
    <div className="notices-container">
      <h2>Notices & Announcements for Parents</h2>
      <div className="notices-list">
        {parentNotices.map((notice, index) => (
          <div className="notice-card" key={index}>
            <div className="notice-header">
              <h3>{notice.title}</h3>
              <span className="notice-date">{notice.date}</span>
            </div>
            <p className="notice-description">{notice.description}</p>
            <p className="notice-issued"><strong>Issued by:</strong> {notice.issuedBy}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentNoticesPage;
