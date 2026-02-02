import "../Styles/ProfileCard.css";

export default function ProfileCard() {
  const email = localStorage.getItem("email");

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
            <p className="profile-name">
              {email ? email.split("@")[0] : "User"}
            </p>
            <p className="profile-email">{email}</p>
          </div>
        </div>

        <div className="lorem">
          <p className="profile-desc">
            Logged in using Google Authentication
          </p>
          <div className="divider"></div>
        </div>
      </div>
    </div>
  );
}
