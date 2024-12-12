import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import './Income.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowData from '../ShowData/ShowData';
import axios from 'axios';

function Income() {
    const [incomeData, setIncomeData] = useState({
        amount: '',
        description: '',
        category: '',
        date: '',
        type: 'income',
    });
    const [postData ,setPostData] = useState(null)

    const postDataFirebase = async () => {
        try {
            await axios.post('https://masai-eval-1-default-rtdb.firebaseio.com/income.json', incomeData);
            setPostData(incomeData)
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    function handleAddIncome(e) {
        e.preventDefault();
        if (!incomeData.amount || !incomeData.description || !incomeData.category || !incomeData.date) {
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
        toast.success('Add Income Successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            transition: Bounce,
        });
        setIncomeData({
            amount: '',
            description: '',
            category: '',
            date: '',
            type: 'income',
        });
    }

    return (
        <div id="income">
            <Nav />
           <h1>Income</h1>
            <ToastContainer />
            <form onSubmit={handleAddIncome}>
                <input
                    value={incomeData.amount}
                    onChange={(e) => setIncomeData({ ...incomeData, amount: e.target.value })}
                    type="number"
                    placeholder="Amount"
                />
                <input
                    value={incomeData.description}
                    onChange={(e) => setIncomeData({ ...incomeData, description: e.target.value })}
                    type="text"
                    placeholder="Description"
                />
                <input
                    value={incomeData.category}
                    onChange={(e) => setIncomeData({ ...incomeData, category: e.target.value })}
                    type="text"
                    placeholder="Category"
                />
                <input
                    type="date"
                    value={incomeData.date}
                    onChange={(e) => setIncomeData({ ...incomeData, date: e.target.value })}
                />
                <button type="submit">Add Income</button>
            </form>
            <ShowData type="income" incomeData={postData} />
        </div>
    );
}

export default Income;
