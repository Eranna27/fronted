import { BASE_URL } from "../Services/Helper";
import Google from "../assets/Google.png";

export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/auth/google`;
  };

  return (
    <div
      onClick={handleGoogleLogin}
      className="flex items-center border rounded-md px-2 py-1.5 gap-2 cursor-pointer bg-gray-50"
    >
      <img src={Google} alt="Google" style={{ width: "100%", height: "30%", objectFit: "contain" }} />
    </div>
  );
}


