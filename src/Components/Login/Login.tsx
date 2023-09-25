import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  let [userName,setUserName]=useState("")
  let [password,setPassword]=useState("")
  let navigate = useNavigate();
  

  async function setLogin(){
    let loginDetains ={userName,password};
    try{
    const response = await axios.post("http://localhost:8080/users/login", loginDetains);
    const serverResponse = response.data;
    let token = 'Bearer ' + serverResponse.token;
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
    navigate('/coupons');
    }
    catch(error: any){
      alert(error.message);
    }
  }

  return(
    <div className="Login">
      <input type="text" placeholder='Enter user name' onChange={event=>setUserName(event.target.value)}/>
      <input type="password" placeholder='Enter password' onChange={event=>setPassword(event.target.value)}/>
      <input type="button" value="login" onClick ={setLogin}/> 
    </div>
  );
}

export default Login;