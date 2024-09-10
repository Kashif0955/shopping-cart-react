import { onAuthStateChanged, getAuth } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const userContext = createContext();

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {}
    });

    console.log(user);
    

    const [loading, setLoading] = useState(false);
    const auth = getAuth();
    useEffect(() => {
        setLoading(true)
        const subscribe = onAuthStateChanged(auth, (user) => {


            if (user) {
                setUser({
                    isLogin: true,
                    userInfo: user.email,
                    photoUrl: user.photoURL,
                    name: user.displayName,

                })
                console.log("user logged in Successfully!");
            } else {
                setUser({
                    isLogin: false,
                    userInfo: {}
                })
                console.log("user is not LoggedIn!");
            }
            setLoading(false)
        });


    }, [])

    return (
        <userContext.Provider value={{ user, setUser }}>
            {loading ? "Loading..." : children}
        </userContext.Provider>

    )
}

export default UserContextProvider;