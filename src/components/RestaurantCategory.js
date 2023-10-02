import ItemList from "./ItemList";
// import { useState } from "react";
const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    console.log(data);
    // const [showItem,setShowItem] = useState(false);
    const handleClick = ()=>{
        setShowIndex();
    }
    return(
        <div  className="my-4 w-6/12 bg-gray-50 shadow-lg p-4 mx-auto ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        <div>

            {showItems && <ItemList items={data.itemCards} />}

        </div>
            
        </div>

    )
};
export default RestaurantCategory;