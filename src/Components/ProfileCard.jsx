import "../Styles/ProfileCard.css";
import Avatar from "@mui/material/Avatar";
export default function ProfileCard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-box">
      <div className="account-settings">
        <h4>Account Settings</h4>
      </div>
      <div className="second-part">
        <div className="profile-header">
          <img
            src="https://i.pravatar.cc/109"
            alt="Profile"
            className="profile-img"
          />

          <div className="profile-info">
            <p className="profile-name">{user?.fullName}</p>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>

        <div className="lorem">
          <p className="profile-desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}
