import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="btn-box">
        <Button
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{ backgroundColor: "#6C2EFF" }}
        >
          Create Account
        </Button>

        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{ backgroundColor: "#D6C6FF", color: "#4A2AAD" }}
        >
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
}
