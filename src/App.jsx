import './App.css'
import Auth from "./Components/Auth/Auth"
import Home from "./Components/Home/Home"
import Income from "./Components/Income/Income"
import Nav from "./Components/Nav/Nav"
import ShowData from "./Components/ShowData/ShowData"
import Expense from "./Components/Expense/Expense"
import Transaction from "./Components/Transaction/Transaction"
import { Route, Routes } from 'react-router-dom'


function App() {



  return (
     <>
<<<<<<< HEAD
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/income' element={<Income/>} />
          <Route path='/transaction' element={<Transaction/>} />
          <Route path='/expense' element={<Expense/>} />
        </Routes>
=======
        <Auth/>
>>>>>>> db422c3c5b880617461c6e324bb46adaed00bccc
      </>
  )
}

export default App
