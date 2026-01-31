import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProfileCard from "./Components/ProfileCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfileCard />} />
    </Routes>
  );
}

export default App;
