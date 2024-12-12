import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import '../Income/Income.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowData from '../ShowData/ShowData';
import axios from 'axios';

function Expense() {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        description: '',
        category: '',
        date: '',
        type: 'expense',
    });
    const [postData ,setPostData] = useState(null)

    const postDataFirebase = async () => {
        try {
            await axios.post('https://masai-eval-1-default-rtdb.firebaseio.com/expense.json',expenseData)
            setPostData(expenseData)
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    function handleAddIncome(e) {
        e.preventDefault();
        if (!expenseData.amount || !expenseData.description || !expenseData.category || !expenseData.date) {
            toast.error('All fields are required.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'colored',
                transition: Bounce,
            });
            return;
        }
        postDataFirebase();
        toast.success('Add Expense Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            transition: Bounce,
        });
        setExpenseData({
            amount: '',
            description: '',
            category: '',
            date: '',
            type: 'expense',
        });
    }

    return (
        <div id="income">
            <Nav />
           <h1>Expense</h1>
            <ToastContainer />
            <form onSubmit={handleAddIncome}>
                <input
                    value={expenseData.amount}
                    onChange={(e) => setExpenseData({ ...expenseData, amount: e.target.value })}
                    type="number"
                    placeholder="Amount"
                />
                <input
                    value={expenseData.description}
                    onChange={(e) => setExpenseData({ ...expenseData, description: e.target.value })}
                    type="text"
                    placeholder="Description"
                />
                <input
                    value={expenseData.category}
                    onChange={(e) => setExpenseData({ ...expenseData, category: e.target.value })}
                    type="text"
                    placeholder="Category"
                />
                <input
                    type="date"
                    value={expenseData.date}
                    onChange={(e) => setExpenseData({ ...expenseData, date: e.target.value })}
                />
                <button type="submit">Add Expense</button>
            </form>
            <ShowData type="expense" expenseData={postData} />
        </div>
    );
}

export default Expense;
