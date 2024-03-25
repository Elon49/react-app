import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState, store } from "../../../Storage/store";
import "./TotalProducts.css";

export function TotalProducts(): JSX.Element {

    // it does the whole work for me - sub + unsub + useState + useEffect + sub only for the slice
    const count = useSelector<AppState, number>(state => state.products?.length);

    // const [count, setCount] = useState<number>(0);

    // useEffect(() => {
    //     const unsubscribe = store.subscribe(()=>{
    //         setCount(store.getState().products?.length);
    //     });

    //     return () => {
    //         unsubscribe();
    //     };

    // }, []);

    if(!count) return null;

    return (
        <div className="TotalProducts">
			<p>total count: {count}</p>
        </div>
    );
}
