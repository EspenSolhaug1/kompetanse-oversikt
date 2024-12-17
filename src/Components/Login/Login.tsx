import { useContext, useEffect, useState } from "react";
import { myContext, myContextType } from "../../App";
import { UserLoginType } from "../../types/UserLoginType";
import { useNavigate } from "react-router-dom";
import { MockLoginData } from "../../ApiData/MockData";
import { UserType } from "../../types/UserType";
import "./Login.css"
import axios from "axios";

const Login = () => {
  const { setUserProfile } = useContext(myContext) as myContextType;
  const [userLoggedIn, setUserLoggedIn] = useState<UserLoginType | undefined>(
    undefined
  );

  //Test arrays for fetching
  const [users, setUsers] = useState<UserLoginType[] | null>(null);

  //Test usestate for epost
  const [email, setEmail] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorBool, setErrorBool] = useState<boolean>(false);
  const navigate = useNavigate();

  //https://localhost:7293/api/users
  //Useeffect to check login
  useEffect(() => {
    setUsers(MockLoginData);
  }, []);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        const theUser: UserLoginType = JSON.parse(loggedInUser);

        try {
          const response = await axios.get<UserType>(
            `https://localhost:7293/api/profile/${theUser.id}`
          );

          setUserProfile(response.data);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, [userLoggedIn]);

  //Handle form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!users?.find((useritem) => useritem.email === email)) {
      //Confirm there is an error finding username
      setErrorMessage("Feil epost eller passord");
      setErrorBool(true);
    } else {
      const theUser = users?.find((useritem) => useritem.email === email);
      if (theUser) {
        setUserLoggedIn(theUser);
        localStorage.setItem("loggedInUser", JSON.stringify(theUser));
      }
      navigate(`/`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <div className="formWrapper">
      <div className="login-page">
        <div className="login-intro">
          {/* <p>Bilde...</p> */}
        
        </div>
        <form onSubmit={handleSubmit}>
          
          <div className="login-form">
            <h1 className="loginTitle">Vennligst logg inn</h1>
            <label htmlFor="epost">Epost: </label>
            <input
              type="text"
              id="first"
              name="first"
              onChange={handleChange}
              value={email}
              placeholder="someone@gmail.com"
              required
            />
            <label htmlFor="password">Passord: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
                  {errorBool && <h3 className="errorMessage">{errorMessage}</h3>}
            <input type="submit" value="Logg inn!" className="btn-submit"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
