import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{

    const [status,setStatus]= useState(true);

    useEffect(()=>
    {
      window.addEventListener("online", () => {
        console.log("You are now connected to the network.");
        setStatus(true);
      });

      window.addEventListener("offline", () => {
        console.log("You are not connected to the network.");
        setStatus(false);
      });
      
    },[])
    

    return status;
}
export default useOnlineStatus