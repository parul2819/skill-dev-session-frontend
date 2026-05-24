import {Suspense, lazy, useEffect, useState} from "react";
import {createBrowserRouter} from "react-router";
import { useSelector } from "react-redux";
import {Outlet} from "react-router";

import RestaurantContainer from "@features/restaurant/RestaurantContainer";
import About from "@components/About";
import PrivateRoute from "@shared/PrivateRoute";
import Cart from "@features/cart/Cart";
import Profile from "@components/Profile";
import UnauthorizedAccess from "@components/UnauthorizedAccess";
import Header from "@shared/Header"
import UserContext from "@utils/UserContext";
import Error from "@components/Error";


const RestaurantInfo = lazy(() => import("@features/restaurant/RestaurantInfo"));
const Footer = () => null;

const AppLayout = () => {
    const isDarkMode = useSelector((store) => store.theme.isDarkMode);
    const [userName, setUserName] = useState("")
    const contextValue = {
      userName,
      email: "guest@mail.com",
      phone: "1111",
      setUserName,
      isAuthenticated: true,
    };

    useEffect(() => {
        setUserName("New User")
    }, [])
        return (
            <UserContext.Provider value={ contextValue }>
            <div id="app-layout"
                className={`${isDarkMode ? "bg-slate-950 text-slate-100" : "bg-gradient-to-b from-rose-50 via-white to-sky-50 text-slate-900"} min-h-screen antialiased`}
            >
              <Header />
              <Outlet />
              <Footer />
            </div>
          </UserContext.Provider>
        );
        };

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <RestaurantContainer />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path: "/restaurant/:restaurantId",
                element: (
                    <Suspense fallback={<h1 className="loading absolute top-20">Loading restaurant info...</h1>}>
                        <RestaurantInfo />
                    </Suspense>
                )
            },
            {
                path: "/cart",
                element: (
                    <PrivateRoute component={<Cart />} fallback="/unauthorizedaccess" />
                )
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute component={<Profile />} fallback="/unauthorizedaccess" />
                )
            },
            {
                path: "/unauthorizedaccess",
                element: (
                    <UnauthorizedAccess />
                )
            },
            {
                path: "*",
                element: <h1> 404 - Page Not Found</h1>
            },
        ]
    }
]);

export default appRouter;