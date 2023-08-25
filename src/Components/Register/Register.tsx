import React from 'react';
import { useState } from 'react';
import './Register.css';

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Register">
      <p>Register</p>
    </div>
  );
}

export default Register;
