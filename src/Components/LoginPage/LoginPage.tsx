import * as Yup from "yup";
import { useAuth } from '../../Context/useAuth';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { myContext, myContextType } from "../../App";
import { UserProfile } from "../../Models/User";
import axios from "axios";
import { UserType } from "../../types/UserType";
import "./LoginPage.css";

type LoginFormInputs = {
    email: string;
    password: string;
}
const validation = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
});

export const LoginPage = () => {
    const { setUserProfile, userProfile } = useContext(myContext) as myContextType;
    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>({ resolver: yupResolver(validation)});
    const handleLogin = (form: LoginFormInputs) =>{
        loginUser(form.email, form.password);
    };

    useEffect(() => {
    const fetchUserProfile = async () => {
      const loggedInUser = localStorage.getItem("user");

      if (loggedInUser) {
        const theUser: UserProfile = JSON.parse(loggedInUser);
        console.log(theUser.id + "abc")

        try {
          const response = await axios.get<UserType>(
            `https://localhost:7293/api/profile/${theUser.id}`
          );
          console.log(JSON.stringify(response.data)+"hei3")
          setUserProfile(response.data);
        } catch (error) {
          console.error("Failed to fetch user profile:", error);
        }
      }
    };
    console.log(userProfile)
    fetchUserProfile();
  }, [loginUser]);
  
  return (
    <div className="formWrapper">
      <div className="login-page">
        <div className="login-intro">
          {/* <p>Bilde...</p> */}
        
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          
          <div className="login-form" >
            <h1 className="loginTitle">Vennligst logg inn</h1>
            <label htmlFor="epost">Epost: </label>
            <input
              type="text"
              id="email"
              placeholder="someone@gmail.com"
              required
              {...register("email")}
            />
            {errors.email ? <p className='text-white'>{errors.email.message}</p> : ""}
            <label htmlFor="password">Passord: </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              {...register("password")}
            />
            {errors.password ? <p className='text-white'>{errors.password.message}</p> : ""}
            <input type="submit" value="Logg inn!" className="btn-submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}