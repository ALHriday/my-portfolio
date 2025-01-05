import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <div className="text-center my-6">Loading...</div>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to='/'></Navigate>
    );
};

export default PrivateRoute;