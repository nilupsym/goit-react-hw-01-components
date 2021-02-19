import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import transactions from './data/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
