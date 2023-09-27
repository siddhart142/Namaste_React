import React from "react"
import { MOCK_DATA, CLOUD_URL } from "../utilis/constants.JS"
// import {CLOUD_URL} from "../utilis/constants"
const ResCard = (props) => {
    let resData=props;
    // console.log(props)
    console.log(resData)
    // console.log(resData.resData.info.name)
    return (
        // resData.info.cloudinaryImageId
    <div className="res-card">
        <img src={CLOUD_URL + resData.resData.info.cloudinaryImageId}/>
        <h2>{resData.resData.info.name}</h2>
        <h3>{resData.resData.info.avgRating}</h3>
        <h4>{resData.resData.info.costForTwo}</h4>
        <h5>{resData.resData.info.sla.slaString}</h5>
        {/* resData.info.sla.slaString */}
    </div> 
)
}
export default ResCard;