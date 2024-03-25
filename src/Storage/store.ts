import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ProductModel } from "../Models/ProductModel";
import * as productsReducers from './products-reducers';
import * as employeesReducers from './employees-reducers';
import { logger } from "./middleware";
import { EmployeeModel } from "../Models/EmployeeModel";

export type AppState = {
    products: ProductModel[],
    employees: EmployeeModel[]
}

//Creating product slice:
const productsSlice = createSlice({
    name: 'products',
    //reducers: {initProducts, addProduct, updateProduct, deleteProduct},
    reducers: {...productsReducers},
    initialState: null
});

//Creating employee slice:
const employeesSlice = createSlice({
    name: 'employees',
    reducers: {...employeesReducers},
    initialState: null
});



//Action creators - automatically generated from the reducers:
export const actions = {...productsSlice.actions, ...employeesSlice.actions};
//Creating the store:
export const store = configureStore<AppState>({
    reducer: {products: productsSlice.reducer, employees: employeesSlice.reducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});


//angulars better here