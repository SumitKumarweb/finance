import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import { toast, Bounce, ToastContainer } from 'react-toastify';

function Transaction() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        try {
            const [response1, response2] = await Promise.all([
                fetch(`https://masai-eval-1-default-rtdb.firebaseio.com/income.json`),
                fetch(`https://masai-eval-1-default-rtdb.firebaseio.com/expense.json`) // Assuming another URL
            ]);
            const [result1, result2] = await Promise.all([response1.json(), response2.json()]);
            const combinedData = { ...result1, ...result2 };
            setData(combinedData);
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

    const deleteData = async (id) => {
        try {
            const response = await fetch(
                `https://masai-eval-1-default-rtdb.firebaseio.com/income/${id}.json`,
                { method: 'DELETE' }
            );

            if (response.ok) {
                toast.success('Item deleted successfully.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "colored",
                });
                const updatedData = { ...data };
                delete updatedData[id];
                setData(updatedData);
            } else {
                throw new Error('Failed to delete item.');
            }
        } catch (error) {
            toast.error('Something went wrong while deleting data.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
            });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <ToastContainer/>
            <Nav />
            <div>
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
                                <button onClick={() => deleteData(key)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Transaction;
