import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Goal from "./Components/Goal/Goal";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="goals/:id" element={<Goal />} />
      </Routes>
    </>
  );
}

export default App;
