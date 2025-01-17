import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../src/MainLayout/MainLayout';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/Login';
import Register from '../src/pages/Register/Register';
import PrivateRouter from './PrivateRouter';
import Dashboard from '../src/pages/Dashboard/Dashboard';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            }
        ]
    },
]);

export default routers;