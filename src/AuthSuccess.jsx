import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const token = params.get("token");
    const userId = params.get("userId");
    const role = params.get("role");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

        navigate("/profile");
    } else {
      navigate("/login");
    }
  }, []);

  

  return (
    <div>
      <h1>Login Successful!</h1>
      <p>Redirecting...</p>
    </div>
  );
}
