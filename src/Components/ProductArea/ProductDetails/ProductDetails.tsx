import { useNavigate, useParams } from "react-router";
import { ProductModel } from "../../../Models/ProductModel";
import "./ProductDetails.css";
import { useState, useEffect } from "react";
import { productService } from "../../../Services/ProductService";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../ProductCard/ProductCard";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function ProductDetails(): JSX.Element {

    const params = useParams();
    console.log(+params.id);
    
    useTitle('product detail' + params.id)

    const [product, setProductDetail] = useState<ProductModel>();

    const navigate = useNavigate();

    useEffect(() => {
        productService.getOneProduct(+params.id)
            .then((dbProductDetail: ProductModel) => setProductDetail(dbProductDetail));
    }, []);

    async function deleteMe() {
        // are you sure? 
        const sure = window.confirm('you sure pal?');
        if (!sure) return;
        try {
            // delete and navigates to products
            await productService.deleteProduct(+params.id);
        } catch ( err: any ) {
            notify.error(err);
        }

        notify.success('products dead');
        navigate('/products');
    }
    
    if(!product) return <Spinner/>

    return (
        <div className="ProductDetails">
			details...
          {product.name}
          {product.price}
          {product.stock}
          <img src = {product.imageUrl}/>
          <br/>
          <br/>
          { product && 
            <div>
                <ProductCard product = {product}/>
            </div>}

          <br/>
          <br/>
          <NavLink to={`/products/`}>Back</NavLink>
          <br/>
          <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
          <br/>
          <NavLink to={`/products/edit/${product.id}`}>edit</NavLink>
        </div>
    );
}
