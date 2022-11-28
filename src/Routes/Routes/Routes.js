import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import CategoryWisePhone from "../../Pages/CategoryWisePhone/CategoryWisePhone";
import AddPhone from "../../Pages/Dashboard/AddPhone/AddPhone";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";

import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import MyPhones from "../../Pages/Dashboard/MyPhones/MyPhones";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/brands/:id',
                element: <PrivateRoute><CategoryWisePhone></CategoryWisePhone></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,
            },
            {
                path: '/dashboard/addphone',
                element: <AdminRoute><AddPhone></AddPhone></AdminRoute>,
            },
            {
                path: '/dashboard/myphone',
                element: <AdminRoute><MyPhones></MyPhones></AdminRoute>,
            },

        ]
    }
])
export default router;