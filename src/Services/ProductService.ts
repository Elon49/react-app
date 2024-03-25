import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { actions, store } from "../Storage/store";
import { appConfig } from "../Utils/AppConfig";

class ProductService {

    public async getAllProducts() {
        //check first if we have it in store
        if(store.getState().products) return store.getState().products;

        // if not got to server and put in store
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;
        store.dispatch(actions.initProducts(products));
        return products;
    }
    public async getOneProduct(id: number): Promise<ProductModel> {
        //check first if we have it in store
        const product = store.getState().products?.find(p => p.id === id);
        if(product) return product;

        // if not got to server
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        return response.data;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "Content-Type": "multipart/form-data" } }
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        store.dispatch(actions.addProduct(dbProduct));
        console.log(dbProduct);
    }
    
    public async editProduct(product: ProductModel): Promise<void> {
        const options = { headers: { "Content-Type": "multipart/form-data" } }
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;
        store.dispatch(actions.updateProduct(dbProduct));
        console.log(dbProduct);
    }

    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + id);
        store.dispatch(actions.deleteProduct(id));
    }
}

export const productService = new ProductService();
