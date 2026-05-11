import React, {Suspense, lazy, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import Header from "./components/Header"
import RestaurantContainer from "./components/RestaurantContainer";
import About from "./components/About";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import UserContext from "./utils/UserContext";

const RestaurantInfo = lazy(() => import("./components/RestaurantInfo"));

/**
 * APP LAYOUT
 * - Header
 *     - Logo
 *     - Menu items
 * - Body
 *     - Top restaurant slider
 *     - Restaurant Container
 *          - Restaurant Card
 *              - Name
 *              - Image
 *              - Rating
 *              - Cuisines
 *              - Expected delivery time
 *              - Location
 * - Footer
 *
 */

// const About = Lazy(() => import("./components/About"))
// const Cart = Lazy(() => import("./components/Cart"))
const Footer = () => {}

const AppLayout = () => {

    const [userName, setUserName] = useState("")

    useEffect(() => {
        /**
         * * make an api call to fetch user data
         * store this user data in a state variable
         */
        setUserName("New User")
    }, [])
        return (
  <UserContext.Provider value={{ userName: userName,
      email : "guest@mail.com", phone: "1111",
      setUserName: setUserName, isAuthenticated: false }}>
    <div id="app-layout">
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
                path: "/unauthorized",
                element: <h1>401 - Unauthorized</h1>
            },
            {
                path: "/cart",
                element: (
                    <PrivateRoute component={<Cart />} fallback="/unauthorized" />
                )
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute component={<Profile />} fallback="/unauthorized" />
                )
            },
            {
                path: "*",
                element: <h1> 404 - Page Not Found</h1>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />);
