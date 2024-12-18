import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import "./colorsScheme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
// import Login from "./Components/Login/Login";
import GoalSite from "./Components/GoalSite/GoalSite";
import { UserType } from "./types/UserType";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";
import { LoginPage } from "./Components/LoginPage/LoginPage";

export interface myContextType {
  userProfile: UserType | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserType | null>>;
  isExiting: boolean;
  handlePageExit: (onLeave: () => void) => void;
}
const contextInitialValues = {
  userProfile: null,
  setUserProfile: () => {},
  isExiting: false,
  handlePageExit: () => {},
};

export const myContext = createContext<myContextType>(contextInitialValues);

function App() {
  const [userProfile, setUserProfile] = useState<UserType | null>(null);

  //Exit animation
  const [isExiting, setIsExiting] = useState(false);
  const handlePageExit = (onLeave: () => void) => {
    setIsExiting(true);
    setTimeout(() => {
      onLeave();
      setIsExiting(false);
    }, 2000);
  };

  return (
    <>
      <UserProvider>
        <myContext.Provider
          value={{
            userProfile,
            setUserProfile,
            isExiting,
            handlePageExit,
          }}
        >
          {userProfile ? (
            <>
              <Navbar />
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Profile />} />
                <Route path="goals/:id" element={<GoalSite />} />
              </Routes>
              <ToastContainer />
            </>
          ) : (
            <>
            <LoginPage />
             
            </>
          )}
        </myContext.Provider>
      </UserProvider>
    </>
  );
}

export default App;
