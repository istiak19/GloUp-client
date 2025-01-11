import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../src/MainLayout/MainLayout';
import Home from '../src/pages/Home/Home';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
]);

export default routers;