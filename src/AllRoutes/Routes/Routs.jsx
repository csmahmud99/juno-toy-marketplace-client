import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import AddToy from "../../Pages/Toys/AddToy/AddToy";
import MyToys from "../../Pages/Toys/MyToys/MyToys/MyToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateToy from "../../Pages/Toys/UpdateToy/UpdateToy";

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
                path: "/add-toy",
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: "/update-toy/:id",
                element: <UpdateToy />,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
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