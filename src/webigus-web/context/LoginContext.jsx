import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '@/services/api.js'
import { useRouter } from 'next/router';

const LoginContext = createContext();

export default LoginContext;

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const router = useRouter();

    const loadUserData = async () => {

        if (Cookies.get('auth') === '1') {
            setIsLoggedIn(true);
            try {
                const res = await api.get(`show/user`)
                setUserData(res.data)
            } catch (error) {
                // Handle error
            }
        } else {
            setIsLoggedIn(false);
            setUserData(null);
        }
    };

    useEffect(() => {
        loadUserData()
    }, []);

    const login = async (parameter, callback = () => { }) => {
        const res = await api.post(`auth/login`, parameter)
        callback(res)
        if (res.data.success) {
            Cookies.set('auth', '1')
            loadUserData()
            router.push('/');
        }
        return res
    }

    const signup = async (parameter, callback = () => { }) => {
        const res = await api.post(`auth/register`, parameter);
        callback(res)
        if (res.data.success) {
            Cookies.set('auth', '1')
            loadUserData()
            router.push('/get-started');
        }
        return res
    }

    const logout = async (callback = () => { }) => {
        try {
            const res = await api.post(`auth/logout`);
            setIsLoggedIn(false);
            setUserData(null);
            Cookies.remove('auth')
            if (res.data.success) {
                callback(res)
                router.push('/login')
            }
        } catch (error) {
            callback(null)
        }
    };

    const value = {
        isLoggedIn,
        userData,
        signup,
        login,
        logout,
    };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};