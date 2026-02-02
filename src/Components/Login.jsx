import "../Styles/Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFunction } from "../Services/Apis";
import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    try {
      const res = await LoginFunction(data);

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/profile");
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-box">
      <div className="header-box">
        <div className="heading">
          Signin to your <br />
          PopX account
        </div>

        <div className="lorem">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        {/* EMAIL */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Email address <span className="required">*</span>
                </>
              }
              error={!!errors.email}
              helperText={errors.email?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* PASSWORD */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="password"
              label={
                <>
                  Password <span className="required">*</span>
                </>
              }
              error={!!errors.password}
              helperText={errors.password?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* BACKEND ERROR */}
        {serverError && (
          <p style={{ color: "red", fontSize: "13px", marginTop: "4px" }}>
            {serverError}
          </p>
        )}

        {/* BUTTON */}
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || loading}
          sx={{
            backgroundColor: "#6C2EFF",
            textTransform: "none",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "16px",
            opacity: !isValid || loading ? 0.6 : 1,
          }}
        >
          {loading ? "Logging..." : "Login"}
        </Button>
        
    <div>
    <GoogleLoginButton />
  </div>
      </form>
    </div>
  );
}

