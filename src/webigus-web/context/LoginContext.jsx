import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const LoginContext = createContext();

export default LoginContext;

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        //const token = Cookies.get('token');
        console.log("")

        if ( !true ) {
            setIsLoggedIn(true);
            const user = ""//getUserDataFromToken(token);
            setUserData(user);
        } else {
            setIsLoggedIn(false);
            setUserData(null);
        }
    }, []);

    const login = (user) => {
        setIsLoggedIn(true);
        setUserData(user);
        //Cookies.set('token', user.token);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        //Cookies.remove('token');
    };

    const value = {
        isLoggedIn,
        userData,
        login,
        logout,
    };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};