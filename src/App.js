import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Role Selection & Login Pages
import RoleSelection from "./screens/RoleSelection";
import StudentLogin from "./screens/StudentLogin";
import StaffLogin from "./screens/StaffLogin";
import ParentLogin from "./screens/ParentLogin";

// Student Pages
import StudentDashboard from "./screens/StudentDashboard";
import StudentProfile from "./screens/StudentProfile";
import StudentInternalMarks from "./screens/StudentInternalMarks";
import AttendancePage from "./screens/AttendancePage";
import StudentAchievements from "./screens/StudentAchievements";
import AddAchievement from "./screens/AddAchievement";
import StudentAcademicCalendar from "./screens/StudentAcademicCalendar";
import UploadPage from "./screens/UploadPage";
import StudentLibrary from "./screens/StudentLibrary";
import StudentCourseList from "./screens/StudentCourseList";
import StudentSemesterMarks from "./screens/StudentSemesterMarks";
import StudentArrearDetails from "./screens/StudentArrearDetails";
import StudentClubAttendance from "./screens/StudentClubAttendance";
import StudentLayout from "./layouts/StudentLayout";

// Staff Pages
import StaffDashboard from "./screens/StaffDashboard";
import StaffLayout from "./layouts/StaffLayout";
import StaffMarksUpload from "./screens/StaffMarksUpload";
import StaffAddMarks from "./screens/StaffAddMarks";
import StaffAttendance from "./screens/StaffAttendance";
import StaffViewMarks from "./screens/StaffViewMarks";
import StaffAnnouncements from "./screens/StaffAnnouncements";
import StaffClassAnalysis from "./screens/StaffClassAnalysis";
import StaffStudentAnalysis from "./screens/StaffStudentAnalysis";
import StaffAttendancesee from "./screens/StaffAttendancesee";
import ParentLayout from "./layouts/ParentLayout";
import ParentDashboard from "./screens/ParentDashboard";
import ParentProfile from "./screens/ParentProfile";
import ParentAttendancePage from "./screens/ParentAttendancePage";
import ParentMarksPage from "./screens/ParentMarksPage";
import ParentSemesterGradeSummary from "./screens/ParentSemesterGradeSummary";
import ClassTimetable from "./screens/ClassTimetable";
import ParentFeeDetails from "./screens/ParentFeeDetails";
import ParentNoticesPage from "./screens/ParentNoticesPage";
import ParentAcademicCalendar from "./screens/ParentAcademicCalendar";
import ParentExamSchedule from "./screens/ParentExamSchedule";



const App = () => {
  return (
    <Router>
      <Routes>
        {/* Role Selection and Login Pages */}
        <Route path="/" element={<RoleSelection />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        {/* Student Pages with Sidebar */}
        <Route
          path="/student-dashboard"
          element={
            <StudentLayout>
              <StudentDashboard />
            </StudentLayout>
          }
        />
        <Route
          path="/student-profile"
          element={
            <StudentLayout>
              <StudentProfile />
            </StudentLayout>
          }
        />
        <Route
          path="/student-internal-marks"
          element={
            <StudentLayout>
              <StudentInternalMarks />
            </StudentLayout>
          }
        />
        <Route
          path="/student-attendance"
          element={
            <StudentLayout>
              <AttendancePage />
            </StudentLayout>
          }
        />
        <Route
          path="/student-achievements"
          element={
            <StudentLayout>
              <StudentAchievements />
            </StudentLayout>
          }
        />
        <Route
          path="/add-achievement"
          element={
            <StudentLayout>
              <AddAchievement />
            </StudentLayout>
          }
        />
        <Route
          path="/student-calendar"
          element={
            <StudentLayout>
              <StudentAcademicCalendar />
            </StudentLayout>
          }
        />
        <Route
          path="/upload-page"
          element={
            <StudentLayout>
              <UploadPage />
            </StudentLayout>
          }
        />
        <Route
          path="/student-library"
          element={
            <StudentLayout>
              <StudentLibrary />
            </StudentLayout>
          }
        />
        <Route
          path="/student-courses"
          element={
            <StudentLayout>
              <StudentCourseList />
            </StudentLayout>
          }
        />
        <Route
          path="/student-semester-marks"
          element={
            <StudentLayout>
              <StudentSemesterMarks />
            </StudentLayout>
          }
        />
        <Route
          path="/student-arrear-details"
          element={
            <StudentLayout>
              <StudentArrearDetails />
            </StudentLayout>
          }
        />
        <Route
          path="/student-club-attendance"
          element={
            <StudentLayout>
              <StudentClubAttendance />
            </StudentLayout>
          }
        />
        {/* Staff Pages with Sidebar */}
        <Route
          path="/staff-dashboard"
          element={
            <StaffLayout>
              <StaffDashboard />
            </StaffLayout>
          }
        />
        <Route
          path="/marks-upload"
          element={
            <StaffLayout>
              <StaffMarksUpload />
            </StaffLayout>
          }
        />
        <Route
          path="/add-marks/:courseId"
          element={
            <StaffLayout>
              <StaffAddMarks />
            </StaffLayout>
          }
        />
        <Route
          path="/staff-attendance"
          element={
            <StaffLayout>
              <StaffAttendance />
            </StaffLayout>
          }
        />
        {/* ✅ Updated View Marks route to accept courseId */}
        <Route
          path="/view-marks/:courseId"
          element={
            <StaffLayout>
              <StaffViewMarks />
            </StaffLayout>
          }
        />
        <Route
          path="/staff-announcements"
          element={
            <StaffLayout>
              <StaffAnnouncements />
            </StaffLayout>
          }
        />
        <Route
          path="/staff-class-analysis"
          element={
            <StaffLayout>
              <StaffClassAnalysis />
            </StaffLayout>
          }
        />
        <Route
          path="/staff-student-analysis"
          element={
            <StaffLayout>
              <StaffStudentAnalysis />
            </StaffLayout>
          }
        />
        <Route
          path="/parent-dashboard"
          element={
            <ParentLayout>
              <ParentDashboard />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-profile"
          element={
            <ParentLayout>
              <ParentProfile />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-attendance"
          element={
            <ParentLayout>
              <ParentAttendancePage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-student-marks"
          element={
            <ParentLayout>
              <ParentMarksPage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-semester"
          element={
            <ParentLayout>
              <ParentSemesterGradeSummary />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-timetable"
          element={
            <ParentLayout>
              <ClassTimetable />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-feedetails"
          element={
            <ParentLayout>
              <ParentFeeDetails />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-announcements"
          element={
            <ParentLayout>
              <ParentNoticesPage />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-calendar"
          element={
            <ParentLayout>
              <ParentAcademicCalendar />
            </ParentLayout>
          }
        />
        <Route
          path="/parent-exam-schedule"
          element={
            <ParentLayout>
              <ParentExamSchedule />
            </ParentLayout>
          }
        />

      </Routes>
    </Router>
  );
};

export default App;
