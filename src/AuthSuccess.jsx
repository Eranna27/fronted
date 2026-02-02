// src/pages/AuthSuccess.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthSuccess() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);

  const token = query.get("token");
  const userId = query.get("userId");
  const role = query.get("role");
  const email = query.get("email");

  useEffect(() => {
    if (token) {
      // Save token in localStorage or context
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      // Redirect to dashboard or home page
      navigate("/dashboard");
    }
  }, [token, userId, role, email, navigate]);

  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Redirecting...</p>
    </div>
  );
}
