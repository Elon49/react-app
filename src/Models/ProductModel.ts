import { RegisterOptions } from "react-hook-form";

export interface ProductModel {
	id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
    image: File;
}

export const nameValidation: RegisterOptions = {
    required: {value: true, message: "Missing name."},
    minLength: {value: 2, message: "Name too short."},
    maxLength: {value: 5, message: "Name too long."},
};


export const priceValidation: RegisterOptions = {
    required: {value: true, message: "Missing price."},
    min: {value: 0, message: "price is + bitch."},
    max: {value: 100, message: " too pricey."},
};