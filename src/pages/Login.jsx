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

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/profile");
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
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Login" onClick={handleLogin} />
      </div>
    </MobileLayout>
  );
}

export default Login;
