import React, { useEffect, useState, useCallback } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ShowData.css';

function ShowData({ type, incomeData, expenseData }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://masai-eval-1-default-rtdb.firebaseio.com/${type}.json`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            toast.error('Something went wrong while fetching data.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [incomeData, expenseData]);

    return (
        <>
            <ToastContainer />
            <div id="showData">
                {loading ? (
                    <p>Loading data...</p>
                ) : data ? (
                    Object.entries(data).map(([key, val]) => (
                        <div key={key}>
                            <span><b>Type</b>: {val.type}</span>
                            <span><b>Amount</b>: {val.amount}</span>
                            <span><b>Category</b>: {val.category}</span>
                            <span><b>Date</b>: {val.date}</span>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </>
    );
}

export default ShowData;
