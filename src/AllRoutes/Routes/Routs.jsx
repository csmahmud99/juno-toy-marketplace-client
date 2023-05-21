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
import AllToys from "../../Pages/Toys/AllToys/AllToys/AllToys";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
                path: "/all-toys",
                element: <AllToys />
            },
            {
                path: "/update-toy/:id",
                element: <UpdateToy />,
                loader: ({params}) => fetch(`https://toy-marketplace-server-bice.vercel.app/toys/${params.id}`)
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