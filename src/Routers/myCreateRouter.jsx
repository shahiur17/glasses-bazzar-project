
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';


import Home from '../pages/Homes/Home';
import Product from '../pages/Product/Product';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import ProductDetails from '../components/ProductDetails/ProductDetails';



const url =
  "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";


const myCreateRouter = createBrowserRouter ([
{
    path: "/",
    element: <MainLayout></MainLayout>,
    children :[
        {
            path: "/",
            element:<Home></Home>,
            loader: async () => fetch(url),
        },
        {
            path:"/product",
            element:<Product></Product>,
            loader: async () => fetch(url),
        },
        {
            path: "/product/:id", 
            element: <ProductDetails></ProductDetails>,
            loader: async ({ params }) => {
                const response = await fetch(`${url}/${params.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            },
        },
        {
            path: "/about",
            element:<About></About>
        },
        {
            path: "/contact",
            element:<Contact></Contact>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            
        }
    ]
}
]) 
   


export default myCreateRouter;
