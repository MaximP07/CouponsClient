
import { useEffect, useState } from "react";
import axios from "axios";
import { ICoupon } from "../Models/ICoupon";
import CouponCard from "../CouponCard/CouponCard";
import './CouponsContainer.css';


function CouponsContainer() {
 const [coupons, setCoupons] = useState<ICoupon[]>([]);

 useEffect(()=>{ viewCoupons() },[]);

    
 async function viewCoupons() {
  try {
    const response = await axios.get("http://localhost:8080/coupons");
    const coupons = response.data;
    setCoupons(coupons);
  }
  catch (error: any) {
    alert (error.response.data.errorMessage);
   }
 }
  
 return (
   <div className="Coupons">
     {coupons.map((coupon) => 
       <CouponCard key={coupon.id} id={coupon.id} name = {coupon.name} description= {coupon.description} startDate={coupon.startDate}
       endDate = {coupon.endDate} amount = {coupon.amount}  price = {coupon.amount} />
     )}
   </div>
 );
}

 export default CouponsContainer;
