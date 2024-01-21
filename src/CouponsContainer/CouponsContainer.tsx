import { useEffect, useState } from "react";
import axios from "axios";
import { ICoupon } from "../Models/ICoupon";
import CouponCard from "../CouponCard/CouponCard";
import './CouponsContainer.css';
import { parseISO, format } from "date-fns";

function CouponsContainer() {
 let [coupons, setCoupons] = useState<ICoupon[]>([]);
 let [couponsViewModel, setCouponsViewModel] = useState<ICoupon[]>(coupons);
 let [userType, setUserType] = useState('');
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
    setCouponsViewModel(coupons);
  }
  catch (error: any) {
    alert (error.response.data.errorMessage);
   }
 }

 function isShowCoupons(coupon: ICoupon): boolean{
  if (searchText == ""){
      return true;
  }
  return coupon.name.toLowerCase().includes(searchText);       
}


async function purchaseCoupon() {
  
  try {
    const response = await axios.post("http://localhost:8080/purchase",);
    const purchase = response.data;
    
  }
  catch (error: any) {
    alert (error.response.data.errorMessage);
   }
 }

 return (
   <div className="CouponsContainer">
       {couponsViewModel.filter(coupons => isShowCoupons(coupons)).map((coupon) =>
                <CouponCard key={coupon.id} id={coupon.id} name={coupon.name} description={coupon.description} startDate={formatDate(coupon.startDate)}
                endDate={formatDate(coupon.endDate)} amount={coupon.amount} price={coupon.price} purchaseCoupon={purchaseCoupon} userType={userType} userId={0} companyId={0}/>
            )}
       <span className="search">
        <input type="text" placeholder="Search" onChange={event => setSearchText(event.target.value.toLowerCase())}/>
        </span>    
   </div>
  
  
   
 );
}

 export default CouponsContainer;
