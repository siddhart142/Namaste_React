import React from "react";
import ResCard from "./ResCard";
import { useState } from "react";
import { MOCK_DATA } from "../utilis/constants"
const Body = () => 
    {
    const [listOfRes, setlistOfRes] = useState(MOCK_DATA);
    return(
    <div className="body">
        <div className="filter">
            <button onClick={()=>{
                let filteredList=listOfRes.filter((res) => res.info.rating.aggregate_rating >=4 )
                setlistOfRes(filteredList)
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

            {listOfRes.map((restaurant) => (
                <ResCard resData={restaurant} />
            ))}
        </div>
    </div>
)
}

export default Body;
