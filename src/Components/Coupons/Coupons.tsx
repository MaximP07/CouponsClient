import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export interface ICoupon {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  amount: number;
  price: number;

}


function Coupons(props: ICoupon) {
  let navigate = useNavigate();

  async function viewCoupons() {
    try {
      const response = await axios.get("http://localhost:8080/users/coupons");
      const serverResponse = response.data;
      let token = 'Bearer ' + serverResponse.token;
      axios.defaults.headers.common['Authorization'] = token;
      localStorage.setItem('token', token);
      navigate('/coupons');
    }
    catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="card">
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
