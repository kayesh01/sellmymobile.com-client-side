import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CategoryWisePhone from "../../Pages/CategoryWisePhone/CategoryWisePhone";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
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
                element: <CategoryWisePhone></CategoryWisePhone>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;