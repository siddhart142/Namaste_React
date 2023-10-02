import React from "react"
// import { MOCK_DATA, CLOUD_URL } from "../utilis/constants.JS"
import {CLOUD_URL} from "../utilis/constants"

const ResCard = (props) => {
    let resData=props;
    // console.log(props) 
    // console.log(resData)
    // console.log(resData.resData.info.name)
    return (
        // resData.info.cloudinaryImageId
    <div className="w-52 p-4 m-4 bg-slate-200 rounded-md hover:bg-slate-400">
        <img className="rounded-md"src={CLOUD_URL + resData.resData.info.cloudinaryImageId}/>
        <h2 className="font-bold py-4">{resData.resData.info.name}</h2>
        <h3>{resData.resData.info.avgRating}</h3>
        <h4>{resData.resData.info.costForTwo}</h4>
        <h5>{resData.resData.info.sla.slaString}</h5>
    </div> 
)
}

export const withPromotedLabel = (ResCard) =>{

    return (props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white px-1 rounded-lg mx-4">Promoted</label>
            <ResCard {...props} />
        </div>
        )
    }
}
export default ResCard;