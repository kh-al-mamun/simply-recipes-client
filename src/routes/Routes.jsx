import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Profile from "../pages/Profile/Profile";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/chef-recipes/:chefId',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment10-data.vercel.app/simply-recipes/chef/${params.chefId}`)
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: 'about',
                element: <AboutUs />
            },
            {
                path:'/login',
                element: <Login />
            },
            {
                path:'/reg',
                element: <Registration />
            }
        ]
    }
])

export default router;