import { useNavigate } from "react-router-dom";
import MobileLayout from "../components/MobileLayout";
import Button from "../components/Button";
import "../styles/landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="landing-page">
        <div className="landing-content">
          <h1>Welcome to PopX</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Button text="Create Account" onClick={() => navigate("/signup")} />

          <Button
            text="Already Registered? Login"
            variant="secondary"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </MobileLayout>
  );
}

export default Landing;
