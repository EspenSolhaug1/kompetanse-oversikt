import axios from 'axios';
import { handleError } from '../Helpers/ErrorHandler';
import { UserProfileToken } from '../Models/User';

const api = "https://localhost:7293/api";

export const loginAPI = async (email: string,password: string) => {
    
    try{
        const data = await axios.post<UserProfileToken>(api + "/Auth/login", {
            email: email,
            password: password,
        });
        console.log(data);
        return data;
    }catch(error){
        handleError(error)
    }
}

export const userId = async (email: string) => {
    
    try{
        const data = await axios.post<UserProfileToken>(api + "/Auth/login", {
            email: email,
        });
        console.log(data);
        return data;
    }catch(error){
        handleError(error)
    }
}

export const registerAPI = async (email: string,password: string) => {
    
    try{
        const data = await axios.post<UserProfileToken>(api + "/Auth/register", {
            email: email,
            password: password,
        });
        return data;
    }catch(error){
        handleError(error)
    }

}
