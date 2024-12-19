Finance Manager
Finance Manager is a web application that allows users to track their income, expenses, and view individual transactions. It features line chart visualizations to show the financial trends over time. The app also includes user authentication for secure access to personal financial data and uses Firebase for authentication and database storage.

Features
Track Income & Expenses: Users can add, update, and delete income and expense transactions.
View Transactions Individually: See each transaction's details such as amount, date, and category.
Line Chart Visualization: Displays income and expense trends over time using Chart.js.
User Authentication: Secure sign-up and sign-in for personalized financial tracking.
Responsive Design: Mobile-friendly interface that adapts to different screen sizes.
Tech Stack
Frontend:

HTML
CSS
JavaScript
React
External Libraries:

Chart.js: Used for generating the line chart to visualize income and expense data.
Axios: Used to make HTTP requests to the Firebase database.
Backend/Database:

Firebase: For authentication and storing user data (including transactions) in Firestore.
Screenshots
Here are some screenshots of the application:

Dashboard with Line Chart:
Shows the dashboard with a line chart visualizing income and expenses over time.

Transaction List:
Displays the list of individual transactions with details.

Login Page:
Login page where users can authenticate securely.

Installation
Prerequisites
Node.js and npm installed.
Firebase project for authentication and Firestore database setup.
Steps to Run the Application Locally:
Clone the repository:

bash
Copy code
git clone https://github.com/SumitKumarweb/finance.git
cd finance
Install dependencies:

bash
Copy code
npm install
Set up Firebase:

Go to Firebase Console, create a new Firebase project, and enable Firebase Authentication and Firestore Database.
In your Firebase project, get your configuration details (API key, Auth domain, Project ID, etc.).

Run the application:

bash
Copy code
npm start
This will launch the application in your browser at http://localhost:3000.

How It Works
1. User Authentication:
Users can sign up or log in using their email and password via Firebase Authentication.
Authentication ensures that each user’s financial data is secure and personalized.
2. Income & Expense Tracking:
Users can add income and expense transactions, including the amount, category, and date.
The data is stored securely in Firebase Firestore, linked to the authenticated user's account.
3. Viewing Transactions:
The application displays a list of all transactions. Users can view, edit, or delete individual transactions as needed.
4. Line Chart Visualization:
The app uses Chart.js to display income and expense trends over time in a dynamic line chart.
The chart is updated in real-time as users add, update, or delete transactions.
5. Using Axios for API Requests:
Axios is used to make HTTP requests to Firebase's Firestore database for fetching and storing user transaction data.
External Libraries
Chart.js: A flexible and customizable charting library that powers the line chart for financial data visualization.

Documentation: Chart.js Docs
Axios: A promise-based HTTP client used for making HTTP requests to Firebase.

Documentation: Axios Docs
Firebase: Used for user authentication and to store financial data in a real-time database (Firestore).

Documentation: Firebase Docs
Contributing
Feel free to fork the repository and submit pull requests if you'd like to contribute. Please ensure that your changes are well-documented and tested.

Contact
For any questions or feedback, you can reach out to me at tarunsaini3500@gmail.com.
