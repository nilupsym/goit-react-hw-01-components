import React from 'react';
import user from './user.json';
import Profile from './components/Profile/Profile';

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
    </div>
  );
}

export default App;
