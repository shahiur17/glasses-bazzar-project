
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';

const myCreateRouter = createBrowserRouter ([
{
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/about",
            element:<About></About>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        }
    ]
}
]) 
   


export default myCreateRouter;
