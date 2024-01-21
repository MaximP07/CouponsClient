import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

interface ILoginCloseModal{
  closeLoginModal: Function;
  setIsLoginSucceded: Function;
}

function Login(props:ILoginCloseModal) {
  let [userName,setUserName]=useState("")
  let [password,setPassword]=useState("")
  
  
  const navigate = useNavigate();
  
  const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
}

const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
}


const validateLoginData = () => {
    if (!userName){
        throw new Error("Empty user name");
    }

    if (!password){
        throw new Error("Empty password");
    }

    if (password.length<6){
        throw new Error("Invalid password - too short");
    }        
}

  async function setLogin(){
    let loginDetains ={userName,password};
    try{
    validateLoginData();
    const response = await axios.post("http://localhost:8080/users/login", loginDetains);
    const serverResponse = response.data;
    let token = 'Bearer ' + serverResponse.token;
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    navigate('/coupons');
    props.closeLoginModal();
    props.setIsLoginSucceded(true);
    }
    catch(error: any){
      alert(error.message);
    }
  };
  return(
    
    <div className="Login">
      <br />
      <input type="text" placeholder='Enter user name' onChange={onUserNameChanged} />
      <br />
      <input type="password"   placeholder='Enter password' onChange={onPasswordChanged} /> 
      <br />
      <br />
      <br />
      <input type="button" value="login" onClick ={setLogin}/> 
      <input type="Button" value="Cancel" onClick={() =>props.closeLoginModal()} />
      
      
    </div>
  );
}

export default Login;
