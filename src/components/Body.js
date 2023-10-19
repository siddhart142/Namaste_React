// import React from "react";
import ResCard ,{withPromotedLabel} from "./ResCard";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utilis/useOnlineStatus";

// import { MOCK_DATA } from "../utilis/constants"

const Body = () => {

    const [listOfRes, setlistOfRes] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);

    const [searchItem,setSearchItem] = useState("");

    const onlineStatus = useOnlineStatus();
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

          const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9622536&lng=77.6979885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
          const json = await data.json();
          const restaurant = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          console.log(json);
          console.log(restaurant);
          setlistOfRes(restaurant);
          setFilteredRes(restaurant);
       
      };
        

    useEffect(()=>{
        fetchData();
        console.log("useState")
    },[]);

    // console.log(listOfRes.length)
    // console.log(filteredRes.length)
    // console.log(filteredRes)
    // console.log(listOfRes)

    if(onlineStatus===false)
    {
        return (<h1>You are not connected</h1>)
    }
 
    if(listOfRes.length===0 || filteredRes.length==0)
    {
        console.log("not rendered");
        return (
            <div>hello</div> // shimmer
        )
    }

   const ResWithLabel=withPromotedLabel(ResCard)
   
    return(
    <div className="body">

        <div className="flex ">
            <div className="align-middle p-4">
                <input className="border border-solid rounded-md py-1 m-4"  type="search" value={searchItem} onChange={(e)=>{
                    setSearchItem(e.target.value)
                }}></input>
                <button className="bg-green-300 py-2 px-4 rounded-lg" onClick={()=>{
                    let filteredSearch=listOfRes.filter((res)=>
                        res.info.name.toLowerCase().includes(searchItem.toLowerCase())
                    )
                    setFilteredRes(filteredSearch)
                }}>Search</button>
            </div>
            <div className="align-middle p-4">
                <button className="bg-gray-400 py-2 px-4 rounded-lg m-3" onClick={()=>{
                    let filteredList=filteredRes.filter((res) => res.info.avgRating >=4 )
                    setFilteredRes(filteredList)
                } }>
                    Restaurant with 4+ rating
                </button>
            </div>
        </div>

        <div className="flex flex-wrap">
            {/* <ResCard
                name="Dey Foods"
                cousine = "Biryani, North Indian"
            /> */}
            
            {/* <ResCard resData={resObj[0]}/>
            <ResCard resData={resObj[1]}/>
            <ResCard resData={resObj[2]}/>
            <ResCard resData={resObj[3]}/> */}

            {
                filteredRes.map((restaurant) => (
               <Link key={restaurant.info.id} to={"Restaurants/"+restaurant.info.id}>
               {restaurant.info.isOpen ? (<ResWithLabel resData={restaurant} />
                    ): (<ResCard resData={restaurant} />
                    )
                }
                </Link> 
                ))}
            

            {/* {
                filteredRes.map((restaurant) => (
                    <ResCard key={restaurant.info.id} resData={restaurant} />
                ))
            } */}
        </div>
    </div>
)
}

export default Body;
