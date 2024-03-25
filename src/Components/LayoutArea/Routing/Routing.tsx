import "./Routing.css";
import { Navigate, Route, Routes } from "react-router";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { Page404 } from "../Page404/Page404";
import { lazy, Suspense } from "react";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { EmployeeList } from "../../EmployeeArea/EmployeeList/EmployeeList";
import { EmployeeDetail } from "../../EmployeeArea/EmployeeDetail/EmployeeDetail";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";

export function Routing(): JSX.Element {

    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));
    const suspenseAbout = <Suspense fallback= { <Spinner/>}><LazyAbout/></Suspense>

    return (
        <div className="Routing">
			<Routes>
                <Route path='/home' element= { <Home/>}></Route>
                <Route path='/products' element= { <ProductList/>}></Route>
                <Route path='/products/add' element= { <AddProduct/>}></Route>
                <Route path='/products/details/:id' element= { <ProductDetails/>}></Route>           
                <Route path='/products/edit/:id' element= { <EditProduct/>}></Route>  


                <Route path='/about' element= { suspenseAbout}></Route>
                <Route path='/contact-us' element= { <ContactUs/>}></Route>

                
                <Route path='/employees' element= { <EmployeeList/>}></Route>
                <Route path='/employees/details/:id' element= { <EmployeeDetail/>}></Route>

                
                <Route path='/' element= { <Navigate to='/home'/>}></Route>
                <Route path='*' element= { <Page404/>}></Route>
            </Routes>
        </div>
    );
}
