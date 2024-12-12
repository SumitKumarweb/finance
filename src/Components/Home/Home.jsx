import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';
import { Line } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Home({ setJwtToken }) {
  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [savingsData, setSavingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const incomeResponse = await axios.get('https://masai-eval-1-default-rtdb.firebaseio.com/income.json'); // Income data endpoint
      const expenseResponse = await axios.get('https://masai-eval-1-default-rtdb.firebaseio.com/expense.json'); // Expense data endpoint

      const incomeResult = incomeResponse.data;
      const expenseResult = expenseResponse.data;

      const formattedIncomeData = Object.values(incomeResult).map((entry) => ({
        amount: parseFloat(entry.amount),
        date: entry.date,
      }));

      const formattedExpenseData = Object.values(expenseResult).map((entry) => ({
        amount: parseFloat(entry.amount),
        date: entry.date,
      }));

      setIncomeData(formattedIncomeData);
      setExpenseData(formattedExpenseData);

      const allDates = [
        ...new Set([
          ...formattedIncomeData.map((item) => item.date),
          ...formattedExpenseData.map((item) => item.date),
        ]),
      ];

      const calculatedSavings = allDates.map((date) => {
        const incomeForDate = formattedIncomeData.find((item) => item.date === date);
        const expenseForDate = formattedExpenseData.find((item) => item.date === date);

        const incomeAmount = incomeForDate ? incomeForDate.amount : 0;
        const expenseAmount = expenseForDate ? expenseForDate.amount : 0;
        return incomeAmount - expenseAmount;
      });

      setSavingsData(calculatedSavings);
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const chartData = {
    labels: [
      ...new Set([
        ...incomeData.map((item) => item.date),
        ...expenseData.map((item) => item.date),
      ]),
    ],   
    datasets: [
      {
        label: 'Income Amount',
        data: incomeData.map((item) => item.amount),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Expense Amount',
        data: expenseData.map((item) => item.amount),
        borderColor: 'rgba(255, 99, 132, 1)',   
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Savings',
        data: savingsData,
        borderColor: 'rgba(54, 162, 235, 1)',  
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Income, Expenses, and Savings Over Time',
      },
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount',
        },
      },
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav setJwtToken={setJwtToken} />
      <div style={{ width: '80%', margin: 'auto' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default Home;
