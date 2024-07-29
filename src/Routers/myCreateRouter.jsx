
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';


import Home from '../pages/Homes/Home';
import Product from '../pages/Product/Product';
import Contact from '../pages/Contact/Contact';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import productLoader from "../components/ProductDetails/productLoader";
import Register from '../pages/Login/Register';


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
            loader: productLoader,
            
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
           path: "/register",
           element:<Register></Register> 
        }
    ]
}
]) 
   


export default myCreateRouter;
