import { NavLink } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">home</NavLink>
            <NavLink to="/products" end>products</NavLink>
            <NavLink to="/products/add">Add A Product</NavLink>
            <NavLink to="/employees">employees</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact-us">contact us</NavLink>

            <TotalProducts/>
        </div>
    );
}
