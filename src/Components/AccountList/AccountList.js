import React, { useState } from 'react';
import './AccountList.css'; 

const AccountList = ({ accounts, addAccount }) => {
  const [newAccountBalance, setNewAccountBalance] = useState('');

  const handleAddAccount = () => {
    if (newAccountBalance) {
      addAccount(parseFloat(newAccountBalance));
      setNewAccountBalance('');
    }
  };

  return (
    <div className="account-list-container">
      <h2 className="account-list-title">Accounts</h2>
      <ul>
        {accounts.map((account, index) => (
          <li className="account-item" key={index}>
            <div className="account-item-content">
              <span className="account-item-text">Account {index + 1}:</span>
              <span>${account.toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="input-container">
        <input
          type="number"
          placeholder="Enter balance"
          value={newAccountBalance}
          onChange={(e) => setNewAccountBalance(e.target.value)}
          className="account-input"
        />
        <button onClick={handleAddAccount} className="add-button">Add Account</button>
      </div>
    </div>
  );
};

export default AccountList;
