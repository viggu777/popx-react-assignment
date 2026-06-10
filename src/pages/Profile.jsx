import { useEffect, useState } from "react";
import MobileLayout from "../components/MobileLayout";

import profileImg from "../assets/Ellipse 114@2x.png";
import cameraIcon from "../assets/Group 1585.svg";

import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "marrydoe@gmail.com",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <MobileLayout>
      <div className="profile-page">
        <h2>Account Settings</h2>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-wrapper">
              <img className="profile-avatar" src={profileImg} alt="Profile" />

              <div className="camera-btn">
                <img src={cameraIcon} alt="Camera" className="camera-icon" />
              </div>
            </div>

            <div>
              <h3>{user.fullName}</h3>
              <p>{user.email}</p>
            </div>
          </div>

          <p className="profile-description">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam.
          </p>
        </div>
        <div className="bottom-divider"></div>
      </div>
    </MobileLayout>
  );
}

export default Profile;
