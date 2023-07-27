import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from "./components/LogIn";
import Signup from "./components/SignUp";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AllCategory from "./components/AllCategory";
import Cars from "./components/Cars";
import Bikes from "./components/Bike";
import CarDetails from "./components/CarDetails";
import BikeDetails from "./components/BikeDetails";
import FeedbackForm from "./components/Feedback";
import Blog from "./components/Blog/Blog";
import AboutUs from "./components/AboutUs";

const App = () => {
    return (
        <>
            <Header />
            <AllCategory />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/cars",
                element: <Cars />,
            },
            {
                path: "/cars/:name",
                element: <CarDetails />,
            },
            {
                path: "/bikes",
                element: <Bikes />,
            },
            {
                path: "/bikes/:name",
                element: <BikeDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/feedback",
                element: <FeedbackForm />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
