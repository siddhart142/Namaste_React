import { useState,useEffect } from "react";
const useFetchApi = (Api) => {

    const [RestaurantMenu , setRestaurnatMenu] = useState(null)

    const fetchMenu = async ()=>{
        const menu = await fetch(Api);
        const json = await menu.json();
        // console.log(json);
        setRestaurnatMenu(json.data);
    }

    useEffect(()=>{
        // setInterval(function () { console.log("Hello")}, 1000);
        fetchMenu();
    },[]);

    return RestaurantMenu;


}

export default useFetchApi