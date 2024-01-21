import { ChangeEvent } from "react";
import { useState } from "react";
import axios from "axios"
import './Register.css';

interface IRegisterCloseModal{
  closeRegisterModal: Function;
  setIsRegisterSucceded: Function;
}

function Register(props: IRegisterCloseModal) {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("")

    const onUserNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const onPasswordChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const onUserTypeChanged = () => {
      setUserType("CUSTOMER");
  }

  const validateRegistrationData = () => {
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

    const onRegisterClicked = async () => {
      let registerDetails ={userName, password,userType}
      try{
        validateRegistrationData();
       const response = await axios.post("http://localhost:8080/users",registerDetails );
       const serverResponse = response.data;
       
       props.closeRegisterModal();
       props.setIsRegisterSucceded(true);
       alert("successfully registered");
      }
      catch(error: any){
        alert(error.message);
      }
    }

    return (
        <div className="Register">
          <br />
            <input type="text" name="userName" placeholder="User name" onChange={onUserNameChanged}/><br />
            
            <input type="password" name="password" placeholder="Password" onChange={onPasswordChanged}/><br />
            <input type="userType" name="userType" placeholder="UserType" value={"CUSTOMER"} onChange={onUserTypeChanged}/><br />
            <br />
            <br />
            <input type="Button" value = "Register" name="userName" placeholder="User name" onClick={onRegisterClicked}/>
            <input type="Button" value="Cancel" onClick={() =>props.closeRegisterModal()} />
        </div>
    );

}

export default Register;
