import { useContext, useEffect, useState } from "react";
import { myContext, myContextType } from "../../App";
import { UserLoginType } from "../../types/UserLoginType";
import { useNavigate } from "react-router-dom";
import { MockLoginData, MockProfileData } from "../../ApiData/MockData";
import { UserType } from "../../types/UserType";

const Login = () => {
  const { userProfile, setUserProfile } = useContext(
    myContext
  ) as myContextType;
  const [userLoggedIn, setUserLoggedIn] = useState<UserLoginType | undefined>(
    undefined
  );

  //Test arrays for fetching
  const [users, setUsers] = useState<UserLoginType[] | null>(null);
  const [profiles, setProfiles] = useState<UserType[] | null>(null);

  //Test usestate for epost
  const [email, setEmail] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorBool, setErrorBool] = useState<boolean>(false);
  const navigate = useNavigate();

  //Dummy usereffect
  useEffect(() => {
    setUsers(MockLoginData);
  }, []);
  useEffect(() => {
    setProfiles(MockProfileData);
  }, [userLoggedIn]);

  /*UseEffect for userLogin
    useEffect(() => {
      fetch(`http://localhost:4000/user/{id}`)
        .then((response) => response.json())
        .then((item) => setUserLoggedIn(item));
    }, []);
    
    //UseEffect for profile info
    useEffect(() => {
      fetch(`http://localhost:4000/profile`)
        .then((response) => response.json())
        .then((item) => setUserProfile(item));
    }, [userLoggedIn]);

    */

  //Handle form

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!users?.find((useritem) => useritem.email === email)) {
      //Confirm there is an error finding username
      setErrorMessage("Wrong email or password");
      setErrorBool(true);
    } else {
      const theUser = users?.find((useritem) => useritem.email === email);
      if (theUser) {
        setUserLoggedIn(theUser);
        const theProfile = profiles?.find(
          (useritem) => useritem.id === theUser?.userId
        );
        if (theProfile) {
          setUserProfile(theProfile);
          localStorage.setItem("storedUser", JSON.stringify(theProfile));
        }
      }

      navigate(`/`);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (
    <div className="login-page">
      <div className="login-intro">
        <p>Bilde...</p>
        <h1>Vennligst logg inn</h1>
      </div>
      {errorBool && <h3>{errorMessage}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label htmlFor="epost">Epost: </label>
          <input
            type="text"
            id="first"
            name="first"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="password">Passord: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
          />
          <input type="submit" value="Logg inn!" />
        </div>
      </form>
    </div>
  );
};

export default Login;
