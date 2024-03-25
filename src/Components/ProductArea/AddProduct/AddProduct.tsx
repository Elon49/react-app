import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { nameValidation, ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./AddProduct.css";

export function AddProduct(): JSX.Element {

    useTitle('produce a product');

    const { register, handleSubmit, formState } = useForm<ProductModel>()

    const navigate = useNavigate();

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.addProduct(product);
            notify.success("Product Added!!!!!!1");
            navigate('/products');
        } catch (err: any) {
            notify.error(err)
        }
    }
    return (
        <div className="AddProduct">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", nameValidation)} />

                <span className="error">{formState.errors?.name?.message}</span>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")}></input>

                <span className="error">{formState.errors?.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock")}></input>

                <label>Image: </label>
                <input type="file" {...register("image")}></input>

                <button>Add</button>
            </form>
        </div>
    );
}
