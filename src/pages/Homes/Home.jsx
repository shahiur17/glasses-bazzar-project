
import { useLoaderData } from "react-router-dom";
import ShowProducts from "../../components/ShowProducts";
import Banner from "./Banner";


const Home = () => {

    const sunglasses = useLoaderData();

    return (
        <div>
           <Banner></Banner>
           <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(5, 10)}/>
           <ShowProducts name={'Top rated'} sunglasses={sunglasses.slice(0, 5)}/>
        </div>
    );
};

export default Home;