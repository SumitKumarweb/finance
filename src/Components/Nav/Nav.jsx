import React  from 'react'
import './nav.css'
import log from './log.webp'
import { useNavigate } from 'react-router-dom'

function Nav() {
 let navigate = useNavigate();
 function handleNavigate(path) {
  navigate(path);
 }
   return (
    <nav>
        <img src={log} alt="logo" />
        <div>
            <button onClick={()=>handleNavigate('/home')}>Saving</button>
            <button onClick={()=>handleNavigate('/income')}>Income</button>
            <button onClick={()=>handleNavigate('/expense')}>Expense</button>
            <button onClick={()=>handleNavigate('/transaction')}>Transaction</button>
        </div>
    </nav>
  )
}

export default Nav