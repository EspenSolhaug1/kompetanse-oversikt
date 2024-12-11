import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import GoalSite from "./Components/GoalSite/GoalSite";
import { UserType } from "./types/UserType";
import { createContext, useState } from "react";

export interface myContextType {
  userProfile: UserType | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserType | null>>;
}
const contextInitialValues = {
  userProfile: null,
  setUserProfile: () => {},
};

export const myContext = createContext<myContextType>(contextInitialValues);

function App() {
  const [userProfile, setUserProfile] = useState<UserType | null>(null);
  /* Using dummy data in development
  useEffect(() => {
    setUserProfile(MockProfileData?[1]);
  }, []);
  */

  /*
  useEffect(() => {
    fetch(`http:localhost:4000/user`)
    .then((response) => response.json())
    .then ((user) => setUserProfile(user))
  }, [userProfile]);
  */


  return (
    <>
      <myContext.Provider
        value={{
          userProfile,
          setUserProfile,
        }}
      >
        {userProfile ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Profile />} />
              <Route path="goals/:id" element={<GoalSite />} />
            </Routes>
          </>
        ) : (
          <Login />
        )}
      </myContext.Provider>
    </>
  );
}

export default App;
