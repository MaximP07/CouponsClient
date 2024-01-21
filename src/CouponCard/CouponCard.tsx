import axios from "axios";
import { ICoupon } from "../Models/ICoupon";
import './CouponCard.css';

interface IProps{
id: number;
name: string;
description: string;
startDate: string;
endDate: string;
amount: number;
price: number;
userId: number;
companyId: number;
userType: string;
purchaseCoupon : Function;
}


function CouponCard(props:IProps){

      function onPurchaseTheCard(){

            props.purchaseCoupon(props.id)
      }

    return (
    <div className="CouponCard">
          {props.name}<br/>
          <br />
           Description : {props.description}<br/>
          <br />
         Start : {props.startDate}<br/>
          End : {props.endDate}<br/>
          <br />
          Available amount : {props.amount}<br/>
          <br />
           Price : {props.price} NIS<br/>
           <br />
          {(<button onClick={onPurchaseTheCard}>purchase</button> )}
    </div>
   );  
}

 export default CouponCard; 


