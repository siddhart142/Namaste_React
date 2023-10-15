import { useSelector } from "react-redux";
import store from "../utilis/appStore";
import ItemList from "./ItemList";

const Cart = () =>{

    const items=useSelector((store) => store.cart.items)
    return (
        <div className=" text-center w-6/12 p-4 m-auto align-middle font-bold p-">  
            Cart
            <ItemList items={items} />
        </div>
    )
};

export default Cart;