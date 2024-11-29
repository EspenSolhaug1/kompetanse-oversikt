import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Goal from "./Components/Goal/Goal";
import { UserType } from "./types/UserType";
import { createContext, useEffect, useState } from "react";
import { MockData } from "./ApiData/MockData";

export interface myContextType {
  currentUser: UserType | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType | null>>;
}
const contextInitialValues = {
  currentUser: null,
  setCurrentUser: () => {},
};

export const myContext = createContext<myContextType>(contextInitialValues);

function App() {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  // Using dummy data in development
  useEffect(() => {
    setCurrentUser(MockData[2]);
  }, []);

  /*
  useEffect(() => {
    fetch(`http:localhost:4000/user`)
    .then((response) => response.json())
    .then ((user) => setCurrentUser(user))
  }, [currentUser]);
  */

  return (
    <>
      <myContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="goals/:id" element={<Goal />} />
        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
