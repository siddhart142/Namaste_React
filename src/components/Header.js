import React from "react";
import {LOGO_URL} from "../utilis/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { useSelector } from "react-redux";
import store from "../utilis/appStore"
const Header = () =>{
    // const [onlineStatus,setOnlineStatus] = useState(true)s
    const cart=useSelector((store) => store.cart.items)
    // console.log(store.cart.items)
    const onlineStatus = useOnlineStatus();
return(
    <div className="flex justify-between bg-blue-100 shadow-2xl">
        <div className="w-28 ">
            <img className="h-full" src={LOGO_URL} alt="logo" />
        </div>
        <div className="flex justify-between">
            <ul className="flex items-center p-4 mx-3">
                <li className=" p-4 mx-2">Online Status : {onlineStatus?'✅':'🔴'} </li>
                <li className=" p-4 mx-2"><Link to = "/">Home</Link></li>
                <li className=" p-4 mx-2"><Link to="/About">About Us</Link></li>
                <li className=" p-4 mx-2"><Link to="/Contact">Contact</Link></li>
                <li className=" p-4 mx-2"><Link to="/Grocery">Grocery</Link></li>
                <li className=" p-4 mx-2"><Link to="/Cart">Cart {cart.length} items</Link></li>
            </ul>
        </div>
    </div>
)
};

export default Header;

