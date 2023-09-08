import React from 'react';

import TimeSeriesGraph from '../TimeSeriesGraph/TimeSeriesGraph'

const RepaymentModel = ({ totalBalance, monthlyPayment }) => {
  const timeSeries = [];
  let currentBalance = totalBalance;

  while (currentBalance > 0) {
    timeSeries.push(currentBalance);
    currentBalance -= monthlyPayment;
    if (currentBalance < 0) currentBalance = 0;
  }

  return (
    <div>
      <h2>Repayment Model</h2>
      <p>Total Balance: ${totalBalance.toFixed(2)}</p>
      <p>Monthly Payment: ${monthlyPayment.toFixed(2)}</p>
     
      <TimeSeriesGraph timeSeries={timeSeries} />
    </div>
  );
};

export default RepaymentModel;
