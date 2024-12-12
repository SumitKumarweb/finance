import './App.css'
import Auth from "./Components/Auth/Auth"
import Home from "./Components/Home/Home"
import Income from "./Components/Income/Income"
import Expense from "./Components/Expense/Expense"
import Transaction from "./Components/Transaction/Transaction"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
     <>
        <Routes>
          <Route path='/' element={<Auth/>} />
          <Route path='/income' element={<Income/>} />
          <Route path='/transaction' element={<Transaction/>} />
          <Route path='/expense' element={<Expense/>} />
        </Routes>
      </>
  )
}

export default App
