import { useLoaderData } from "react-router-dom";
import ShowProducts from "../../components/ShowProducts";


const Product = () => {

    const sunglasses = useLoaderData();

    return (
        <div>
           <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />

            <ShowProducts name={'Featured Products'} sunglasses={sunglasses} />
        </div>
    );
};

export default Product;