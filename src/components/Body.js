import React from "react";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import { MOCK_DATA } from "../utilis/constants"
const Body = () => 
    {
    let item;
    const [listOfRes, setlistOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchItem,setSearchItem] = useState("");
    
    // const getData = async ()=>{
    //     try{
    //     const temp = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING%22");
    //     const data = await temp.json();

    //     console.log(data);
    //     // setFilteredRes(data);
    //     setlistOfRes(data);
    //     console.log("rendered");
    //     }
    //     catch(err)
    //     {
    //         console.log(err);
    //     }
    // }
    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
    
        const json = await data.json();
        const arrayOfCards = json.data.cards;
        const restaurant_list = "restaurant_grid_listing";
        let resData
        for (const cardObj of arrayOfCards) {
          if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
            resData =
            cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
          }
        }
        setlistOfRes(resData);
        setFilteredRes(resData);
      };
        

    useEffect(()=>{
        fetchData();
    },[])

    console.log("not rendered");
    return(
    <div className="body">
        <div className="filter">
        <div className="search-item">
        <input  type="search" value={searchItem} onChange={(e)=>{
            setSearchItem(e.target.value)
            // item=e.target.value;
        }}></input>
        <button onClick={()=>{
            let filteredSearch=listOfRes.filter((res)=>
                res.info.name.toLowerCase().includes(searchItem.toLowerCase())
            )
            setFilteredRes(filteredSearch)
        }}>Search</button>

        </div>
            <button onClick={()=>{
                let filteredList=filteredRes.filter((res) => res.info.avgRating >=4 )
                setFilteredRes(filteredList)
            } }>
                Restaurant with 4+ rating
            </button>
        </div>
        <div className="container">
            {/* <ResCard
                name="Dey Foods"
                cousine = "Biryani, North Indian"
            /> */}
            
            {/* <ResCard resData={resObj[0]}/>
            <ResCard resData={resObj[1]}/>
            <ResCard resData={resObj[2]}/>
            <ResCard resData={resObj[3]}/> */}

            {filteredRes.map((restaurant) => (
                <ResCard resData={restaurant} />
            ))}
        </div>
    </div>
)
}

export default Body;
