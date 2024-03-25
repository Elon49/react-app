import { NavLink } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { useTitle } from "../../../Utils/UseTitle";
import "./ProductCard.css";

type ProductCardProps = {
    product: ProductModel;
};

export function ProductCard({product: {id, name, price, stock, imageUrl}}: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
			    <div>
                    <span>{name}</span>
                    <span>Price: {price}</span>
                    <span>Stock: {stock}</span>
                </div>
			    <div>
                <NavLink to = {`/products/details/${id}`}>
                    <img src={imageUrl} />
                    </NavLink>
                </div>
        </div>
    );
}
