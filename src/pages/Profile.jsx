import { useEffect, useState } from "react";
import MobileLayout from "../components/MobileLayout";
import "../styles/profile.css";

function Profile() {
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "marrydoe@gmail.com",
    avatarSeed: "Marry Doe",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      setUser({
        ...parsedUser,
        avatarSeed: parsedUser.avatarSeed || parsedUser.fullName || "Marry Doe",
      });
    }
  }, []);

  const changeAvatar = () => {
    const avatarOptions = [
      "Jennifer Lee",
      "Christopher Evans",
      "Rachel Green",
      "Matthew Cooper",
      "Natalie Foster",
      "Andrew Collins",
      "Victoria Hughes",
      "Jonathan Price",
    ];
    const randomAvatar =
      avatarOptions[Math.floor(Math.random() * avatarOptions.length)];

    const updatedUser = {
      ...user,
      avatarSeed: randomAvatar,
    };

    setUser(updatedUser);

    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <MobileLayout>
      <div className="profile-page">
        <h2>Account Settings</h2>

        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-wrapper">
              <img
                className="profile-avatar"
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.avatarSeed}`}
                alt="Profile"
              />

              <button className="camera-btn" onClick={changeAvatar}>
                📷
              </button>
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
      </div>
    </MobileLayout>
  );
}

export default Profile;
