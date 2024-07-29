
const url = "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";

const productLoader = async ({params }) => {
    const response = await fetch(`${url}/${params.id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default productLoader;