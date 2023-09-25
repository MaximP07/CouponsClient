
import { useEffect, useState } from "react";
import axios from "axios";
import { ICoupon } from "../Models/ICoupon";
import CouponCard from "../CouponCard/CouponCard";
import './CouponsContainer.css';
import { parseISO, format } from "date-fns";

function CouponsContainer() {
 const [coupons, setCoupons] = useState<ICoupon[]>([]);
 let [userType, setUserType] = useState('user');
 let [searchText, setSearchText] = useState("");

 useEffect(()=>{ viewCoupons() },[]);

 function formatDate(date: string )  {
  const dateObj = parseISO(date);
  const newDateStr = format(dateObj, "dd-MM-yyyy");
  return newDateStr;
 }
    
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
       <CouponCard key={coupon.id} id={coupon.id} name = {coupon.name} description= {coupon.description} startDate={formatDate(coupon.startDate)}
       endDate = {formatDate(coupon.endDate)} amount = {coupon.amount}  price = {coupon.price} />
     )}
     
   </div>
 );
}

 export default CouponsContainer;
