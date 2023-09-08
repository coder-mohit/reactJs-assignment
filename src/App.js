import React, { useState } from 'react';
import './App.css';
import AccountList from './Components/AccountList/AccountList';
import RepaymentModel from './Components/RepaymentModel/RepaymentModel';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(50);

  const handleAddAccount = (balance) => {
    setAccounts([...accounts, balance]);
  };

  return (
    <div className="App">
      <h1>Accounts and Repayment</h1>
      
      <div className="App-content">
        <AccountList accounts={accounts} addAccount={handleAddAccount} />
        <div>
          <h3>Enter monthly payment</h3>
          <input
            type="number"
            placeholder="Enter monthly payment"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(parseFloat(e.target.value))}
          />
        </div>
        <RepaymentModel totalBalance={accounts.reduce((a, b) => a + b, 0)} monthlyPayment={monthlyPayment} />
        
      </div>
    </div>
  );
}

export default App;
