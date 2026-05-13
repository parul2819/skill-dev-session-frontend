import { useContext } from "react";
import { Navigate } from "react-router";
import UserContext from "../utils/UserContext";

const PrivateRoute = ({ component, fallback = "/unauthorizedaccess" }) => {
    const { isAuthenticated } = useContext(UserContext);

    if (!isAuthenticated) {
        return <Navigate to={fallback} replace />
    }

    return component
}

export default PrivateRoute
