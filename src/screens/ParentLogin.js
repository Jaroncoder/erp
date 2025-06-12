import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Common CSS file

const ParentLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    navigate("/parent-dashboard");
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Parent Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
        <p className="forgot-password" onClick={() => navigate("/forgot-password")}>Forgot Password?</p>
      </form>
    </div>
  );
};

export default ParentLogin;
