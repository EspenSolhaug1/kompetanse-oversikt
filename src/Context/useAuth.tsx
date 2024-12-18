import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (email: string, password:string) => void;
    loginUser: (email: string, password: string) => void;
    logout: () => void;
    isLoggedin: () => boolean;
}

type Props = { children: React.ReactNode};
 
const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({children} :  Props) =>{
    const navigate = useNavigate();
    const [token, setToken] = useState<string| null>(null);
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(user && token){
            setUser(JSON.parse(user));
            console.log(user + "hei2")
            setToken(token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setIsReady(true);
    }, []);

    const registerUser = async (email: string, password: string) =>{
        await registerAPI(email, password).then((res)=> {
            if(res){
                localStorage.setItem("token",res?.data.token);
                const userObj = {  
                    id: res?.data.id,
                    email: email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                console.log(userObj)
                setToken(res?.data.token);
                setUser(userObj!);
                toast.success("Login Success")
                navigate(`/`);
            }
        }).catch((e) => toast.warning("Server error occured" + e));
    };


    const loginUser = async (email: string, password: string) => {
    console.log("Login triggered for:", email);
    try {
        const res = await loginAPI(email, password);
        if (res) {
            console.log("Login API success:", res.data);
            await loginAPI(email, password).then((res)=> {
            if(res){
                localStorage.setItem("token",res?.data.token);
                const userObj = {
                    id: res?.data.id,
                    email: email,

                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token);
                setUser(userObj!);
                // console.log(JSON.stringify(userObj))
                // console.log("hei")
                toast.success("Login Success")
               navigate(`/`);
            }
        }).catch((e) => toast.warning("Server error occured" + e));
        }
    } catch (error) {
        console.error("Login failed:" + error);
    }
};

    
    const isLoggedin = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/"); 
        
    }

    return (
        <UserContext.Provider value={{loginUser, user, token, logout, isLoggedin, registerUser,}}>
            {isReady ? children : null}
        </UserContext.Provider>
    )
};

export const useAuth = () => React.useContext(UserContext);
