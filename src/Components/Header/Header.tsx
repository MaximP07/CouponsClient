import { useState } from 'react';
import Login from '../Login/Login';
import './Header.css';
import Modal from 'react-modal';
import Register from '../Register/Register';

const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: "rgb(207, 250, 241)",
      height: "250px",
      padding: "70px",
      width: "250px",
      
 
     
  },
};


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Header() {
  let [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  let [isLoginSucceded, setIsLoginSucceded] = useState(false);

  let [registerModalIsOpen, setRegisterModalIsOpen] = useState(false);
  let [isRegisterSucceded, setIsRegisterSucceded] = useState(false);



  
  function openLoginModal() {
    setLoginModalIsOpen(true);
  }

  function closeLoginModal() {
    setLoginModalIsOpen(false);
  }

  function openRegisterModal() {
    setRegisterModalIsOpen(true);
  }

  function closeRegisterModal() {
    setRegisterModalIsOpen(false);
  }




  return (
    <>
      <div className="Header"> Coupon Project</div>

      <div className="Modal">
        {!isLoginSucceded && (
          <button className="modalLoginPage" onClick={openLoginModal}>
            LOGIN
          </button>
        )}
        {isLoginSucceded && "Welcome "+localStorage.getItem("userName") }
        <Modal
          isOpen={loginModalIsOpen}
          onRequestClose={closeLoginModal}
          style={customStyles}
        >
          <h2>Login</h2>
          <Login
           closeLoginModal={closeLoginModal}
           setIsLoginSucceded={setIsLoginSucceded}
           
          />
        </Modal>
        <div className='Register_Modal'>
        {!isRegisterSucceded && (
          <button className="modal-Register" onClick={openRegisterModal}>
            REGISTER
          </button>
        )} 
        <Modal
          isOpen={registerModalIsOpen}
          onRequestClose={closeRegisterModal}
          style={customStyles}
        >
          
          <h2>Register</h2>
          <Register
           closeRegisterModal={closeRegisterModal}
           setIsRegisterSucceded={setIsRegisterSucceded}
          />
        </Modal>
        </div>
       
      </div>
    </>
  );
}

export default Header;