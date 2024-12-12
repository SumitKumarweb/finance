import React, { useState } from "react";
import "./Auth.css"; 
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Auth = () => {
  const [auth ,setAuth] = useState(true)
  const [authData ,setAuthData] = useState({
    user:'',
    email:'',
    password:''
  })
  

  function handleAuth(){
    if(auth){
      if(!authData.user && !authData.password && !authData.email){
        toast.error('All field Required', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        return
      }
      toast.success('Sign Up successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setAuth(false)
      setAuthData({
        user:'',
        email:'',
        password:''
      })
    }else{
      if(!authData.user && !authData.password){
        toast.error('All field Required', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          });
        return
      }
      toast.success('Login successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      setAuth(false)
      setAuthData({
        user:'',
        password:''
      })
    }
    

  }



  return (
    <main className="main-login">
      <ToastContainer />
      <div className="right-login">
        <div className="card-login">
          <h1>{auth ? 'Sign up' : 'Login'}</h1>
          <div className="textfield">
            <label htmlFor="user">User</label>
            <input 
              value={authData.user}
              onChange={(e)=>setAuthData({...authData , user:e.target.value})}
              type="text" 
              name="user" 
              placeholder="User" 
            />
          </div>
          {
            auth 
            ? 
            <div className="textfield">
              <label htmlFor="user">Email</label>
              <input 
                value={authData.email}
                onChange={(e)=>setAuthData({...authData , email:e.target.value})}
                type="email" 
                name="email" 
                placeholder="Email" 
              />
            </div>
            : 
            ''
          }
          <div className="textfield">
            <label htmlFor="password">Password</label>
            <input 
              value={authData.password}
              onChange={(e)=>setAuthData({...authData , password:e.target.value})}
              type="password" 
              name="password" 
              placeholder="Password" />
          </div>
          <button onClick={()=>handleAuth()} className="btn-login">{auth ? 'Sign up' : 'Login'}</button>
        </div>
      </div>
    </main>
  );
};



export default Auth