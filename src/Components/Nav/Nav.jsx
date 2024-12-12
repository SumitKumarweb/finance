import React  from 'react'
import './nav.css'
import log from './log.webp'
import { useNavigate } from 'react-router-dom'
import logoutImg from './shutdown.png'
function Nav({setJwtToken}) {
 let navigate = useNavigate();
 function handleNavigate(path) {
  navigate(path);
 }

 function handleLogOut(){
  setJwtToken(null)
  localStorage.removeItem('jwtToken')
 }
   return (
    <nav>
        <img src={log} style={{cursor:'pointer'}} alt="logo" onClick={()=>handleNavigate('/')}/>
        <div>
            <button onClick={()=>handleNavigate('/')}>Home</button>
            <button onClick={()=>handleNavigate('/income')}>Income</button>
            <button onClick={()=>handleNavigate('/expense')}>Expense</button>
            <button onClick={()=>handleNavigate('/transaction')}>Transaction</button>
        </div>
        <img src={logoutImg} style={{cursor:'pointer'}} alt="" onClick={()=>handleLogOut()}/>
    </nav>
  )
}

export default Nav