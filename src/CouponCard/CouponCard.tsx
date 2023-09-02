import { ICoupon } from "../Models/ICoupon";
import './CouponCard.css';

function CouponCard(props:ICoupon){
    return (
    <div className="CouponCard">
          {props.id}
          {props.name}
          {props.description}
          {props.startDate}
          {props.endDate}
          {props.amount}
          {props.price}
    </div>
   );  
  
  }
  export default CouponCard; 