import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ParentAcademicCalendar.css";

const ParentAcademicCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [upcomingReminders, setUpcomingReminders] = useState([]);
  const navigate = useNavigate();

  const formatDate = (date) => date.toISOString().split("T")[0];
  const today = new Date();
  const oneWeekLater = new Date(today);
  oneWeekLater.setDate(today.getDate() + 7);

  const events = {
    [formatDate(oneWeekLater)]: [{ title: "Test Event: One Week Reminder" }],
    "2025-04-10": [{ title: "Sports Day" }],
    "2025-04-20": [{ title: "Mid-Semester Break" }],
    "2025-05-01": [{ title: "Project Submission" }],
  };

  const changeMonth = (step) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + step);
    setCurrentDate(newDate);
  };

  useEffect(() => {
    const reminders = [];

    Object.keys(events).forEach((eventDate) => {
      const eventDay = new Date(eventDate);
      const daysDiff = Math.ceil((eventDay - today) / (1000 * 60 * 60 * 24));

      if (daysDiff === 7) {
        reminders.push(`📅 Reminder: ${events[eventDate][0].title} is in **1 week**.`);
      } else if (daysDiff === 1) {
        reminders.push(`🚨 Reminder: ${events[eventDate][0].title} is **tomorrow**.`);
      }
    });

    if (reminders.length > 0) {
      setUpcomingReminders(reminders);
    }
  }, []);

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevDays = firstDay;
    const totalDays = prevDays + daysInMonth;
    let days = [];

    for (let i = 0; i < totalDays; i++) {
      const date = i - prevDays + 1;
      const isCurrentMonth = date > 0 && date <= daysInMonth;
      const dayKey = isCurrentMonth ? formatDate(new Date(year, month, date)) : "";

      days.push({
        date: isCurrentMonth ? date : null,
        key: dayKey,
        isCurrentMonth,
        events: isCurrentMonth && dayKey in events ? events[dayKey] : [],
      });
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <h2>
        Student Academic Calendar -{" "}
        {currentDate.toLocaleString("default", { month: "long" })}{" "}
        {currentDate.getFullYear()}
      </h2>

      <div className="calendar-nav">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>

      <div style={{ margin: "20px 0" }}>
        <button onClick={() => navigate("/parent-exam-schedule")} className="exam-button">
          View Exam Schedule
        </button>
      </div>

      <div className="calendar-wrapper">
        <div className="calendar-header">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="calendar-day-header">
              {day}
            </div>
          ))}
        </div>

        <div className="calendar-grid">
          {generateCalendarDays().map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day.isCurrentMonth ? "current-month" : "other-month"}`}
            >
              {day.date && <span>{day.date}</span>}
              {day.events.map((event, idx) => (
                <div key={idx} className="calendar-event">
                  {event.title}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {upcomingReminders.length > 0 && (
        <div className="reminder-popup">
          <div className="popup-content">
            <h3>Upcoming Reminders</h3>
            {upcomingReminders.map((reminder, idx) => (
              <p key={idx}>{reminder}</p>
            ))}
            <button onClick={() => setUpcomingReminders([])}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParentAcademicCalendar;
