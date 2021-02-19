import React from 'react';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

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
    </div>
  );
}

export default App;
