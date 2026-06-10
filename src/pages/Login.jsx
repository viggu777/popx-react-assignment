import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../components/MobileLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";

import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const emailError =
    email && !validateEmail(email) ? "Please enter a valid email address" : "";

  const passwordError =
    password && password.length < 6
      ? "Password must be at least 6 characters"
      : "";

  const isFormValid = validateEmail(email) && password.length >= 6;

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setLoginError("");
      navigate("/profile");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <MobileLayout>
      <div className="login-page">
        <h1>
          Signin to your <br />
          PopX account
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <InputField
          label="Email Address"
          name="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setLoginError("");
          }}
          error={emailError}
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setLoginError("");
          }}
          error={passwordError}
        />
        {loginError && <span className="login-error">{loginError}</span>}

        <Button text="Login" onClick={handleLogin} disabled={!isFormValid} />
      </div>
    </MobileLayout>
  );
}

export default Login;
