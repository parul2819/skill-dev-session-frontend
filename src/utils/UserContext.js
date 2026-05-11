import { createContext } from "react";

const UserContext = createContext({
    userName: "",
    email : "",
    phone : "",
    isAuthenticated: false,
});

export default UserContext;
