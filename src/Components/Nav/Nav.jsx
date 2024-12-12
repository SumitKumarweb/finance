import React  from 'react'
import './nav.css'
import log from './log.webp'
function Nav() {
 
   return (
    <nav>
        <img src={log} alt="logo" />
        <div>
            <button>Saving</button>
            <button>Income</button>
            <button>Expense</button>
            <button>Transaction</button>
        </div>
    </nav>
  )
}

export default Nav