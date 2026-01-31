import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerFunction } from "../Services/Apis"; // 🔥 API
import "../Styles/Signup.css";

export default function Signup() {
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
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      agency: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    // 🔁 Frontend → Backend mapping
    const payload = {
      name: data.fullName,
      email: data.email,
      password: data.password,
      companyName: data.company,
      mobileNumber: data.phone,
      isAgency: data.agency === "yes",
    };

    try {
      const res = await registerFunction(payload);

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setServerError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-box">
      <div className="heading">
        Create your <br />
        PopX account
      </div>

      <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <Controller
          name="fullName"
          control={control}
          rules={{ required: "Full name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Full Name <span className="required">*</span>
                </>
              }
              error={!!errors.fullName}
              helperText={errors.fullName?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Must be 10 digits",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Phone number <span className="required">*</span>
                </>
              }
              error={!!errors.phone}
              helperText={errors.phone?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Email */}
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

        {/* Password */}
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

        {/* Company */}
        <Controller
          name="company"
          control={control}
          rules={{ required: "Company name is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              label={
                <>
                  Company name <span className="required">*</span>
                </>
              }
              error={!!errors.company}
              helperText={errors.company?.message || " "}
              size="small"
              fullWidth
            />
          )}
        />

        {/* Agency */}
        <Controller
          name="agency"
          control={control}
          rules={{ required: "Please select an option" }}
          render={({ field }) => (
            <FormControl error={!!errors.agency}>
              <FormLabel>
                Are you an Agency?<span className="required">*</span>
              </FormLabel>
              <RadioGroup row {...field}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          )}
        />

        {/* Backend Error */}
        {serverError && (
          <p style={{ color: "red", fontSize: "13px" }}>{serverError}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          variant="contained"
          disabled={!isValid || loading}
          sx={{
            backgroundColor: "#6C2EFF",
            textTransform: "none",
            borderRadius: "8px",
            padding: "12px",
            opacity: !isValid || loading ? 0.6 : 1,
          }}
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>
      </form>
    </div>
  );
}
