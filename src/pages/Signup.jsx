import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSignup = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/profile");
  };

  return (
    <MobileLayout>
      <div className="signup-page">
        <h1>
          Create your <br />
          PopX account
        </h1>

        <InputField
          label="Full Name*"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <InputField
          label="Phone Number*"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <InputField
          label="Email Address*"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Password*"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <InputField
          label="Company Name"
          name="company"
          placeholder="Enter company name"
          value={formData.company}
          onChange={handleChange}
        />

        <div className="radio-group">
          <p>
            Are you an Agency?
            <span className="required-star">*</span>
          </p>

          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="signup-btn">
          <Button text="Create Account" onClick={handleSignup} />
        </div>
      </div>
    </MobileLayout>
  );
}

export default Signup;
