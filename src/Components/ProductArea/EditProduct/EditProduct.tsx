import { SyntheticEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { nameValidation, priceValidation, ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import "./EditProduct.css";

export function EditProduct(): JSX.Element {

    useTitle('edit a product');

    const { register, handleSubmit, formState, setValue, watch } = useForm<ProductModel>()
    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        productService.getOneProduct(+id)
            .then((dbProduct: ProductModel) => {
                setValue("name", dbProduct.name);
                setValue("price", dbProduct.price);
                setValue("stock", dbProduct.stock);
                setValue("imageUrl", dbProduct.imageUrl);
            }).catch(err => notify.error(err));
    }, []);


    async function send(product: ProductModel) { //comes raw from the form input
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productService.editProduct({ id, ...product });
            notify.success("Product Edited!!!!!!1");
            navigate('/products');

        } catch (err: any) {
            notify.error(err);
        }

    }
    return (
        <div className="EditProduct">
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
                <img src={watch('imageUrl')} />

                <button>Update</button>
            </form>
        </div>
    );
}