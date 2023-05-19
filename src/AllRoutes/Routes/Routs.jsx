import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Blog from "../../Pages/Blog/Blog";

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
            }
        ]
    }
]);

export default router;