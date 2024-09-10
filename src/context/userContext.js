import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


const userContext = createContext();

const userContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogin: false,
        userInfo: {}
    });

    const [loading, setLoading] = useState(false);

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

export default userContextProvider;