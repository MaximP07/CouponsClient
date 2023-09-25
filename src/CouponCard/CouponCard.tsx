import { ICoupon } from "../Models/ICoupon";
import './CouponCard.css';

function CouponCard(props:ICoupon){
    return (
    <div className="CouponCard">
          
          {props.name}<br/>
          {props.description}<br/>
         Start : {props.startDate}<br/>
          End : {props.endDate}<br/>
          Available amount : {props.amount}<br/>
           Price : {props.price} NIS<br/>
    </div>
   );  
  
  }
  export default CouponCard; 