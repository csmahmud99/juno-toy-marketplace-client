import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
]);

export default router;