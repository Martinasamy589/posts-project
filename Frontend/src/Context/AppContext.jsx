import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    async function getUser() {
        const res = await fetch ('/api/user', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const data = await res.json();
        setUser(data)
    }

    useEffect(()=>{
        token && getUser()
    }, [token])

    return(
        <AppContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}