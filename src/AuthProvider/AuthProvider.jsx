import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(true); // for PrivateRoute practice
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjectData(data)
        )
    }, [])

    const values = {
        loading,
        setLoading,
        user,
        setUser,
        projectData
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;