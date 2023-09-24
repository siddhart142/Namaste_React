import React from "react";
const ResCard = (props) => {
    let resData=props;
    // console.log(props)
    console.log(resData)
    // console.log(resData.resData.info.name)
    return (
    <div className="res-card">
        <img src={resData.resData.info.image.url}/>
        <h2>{resData.resData.info.name}</h2>
        <h3>{resData.resData.info.rating.aggregate_rating}</h3>
        <h4>{resData.resData.info.cft.text}</h4>
        <h5>{resData.resData.order.deliveryTime}</h5>
    </div> 
)
}
export default ResCard;