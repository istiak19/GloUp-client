import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../src/Hook/useAuth";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }


    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;