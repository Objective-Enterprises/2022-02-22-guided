import { useParams } from "react-router";
import Product from "../components/Product";
const ProductPage = () => {
    const params = useParams()
    const localProducts = localStorage.getItem('products')
    const products = JSON.parse(localProducts)
    const product = products.find(product => {
        return product.id === Number(params.productId)
    })
    console.log('product', product)
    return (
        <>
            <h1>Product #{params.productId}</h1>
            <Product product={product} />
        </>
    )
};

export default ProductPage;
