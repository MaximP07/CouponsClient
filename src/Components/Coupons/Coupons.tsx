import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ICoupon } from "../../Models/ICoupon";
import { error } from "console";


async function viewCoupons() {
  try {
    const response = await axios.get("http://localhost:8080/coupons");
    const serverResponse = response.data;
    console.log(serverResponse);
    return serverResponse;
  }
  catch (error: any) {
    alert (error.response.data.errorMessage);
  }
}



function Coupons() {
 const [coupons, setCoupons] = useState<[]>([]);
 useEffect(()=>{
  viewCoupons()
  .then((data)=>{
    setCoupons(data)
  })
 .catch(error)=>alert(error.response.data.console.errorMessage));

 },[]);
  
 
  

  
  
  return (
    <div className="coupons">
      {props.name}<br />
      {props.description}<br />
      {props.startDate}<br />
      {props.endDate}<br />
      {props.amount}<br />
      {props.price}<br />
    </div>
  );
}

export default Coupons;

