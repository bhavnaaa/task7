import React, { useState } from 'react';
import Login from './components/Login';
import Users from './components/Users';
import TaskLists from './components/TaskLists';
import Tasks from './components/Tasks';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuItem, setMenuItem] = useState('Users');

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="app">
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <div className="menu">
            <button onClick={() => setMenuItem('Users')}>Users</button>
            <button onClick={() => setMenuItem('TaskLists')}>Task Lists</button>
            <button onClick={() => setMenuItem('Tasks')}>Tasks</button>
          </div>
          <div className="content">
            {menuItem === 'Users' && <Users />}
            {menuItem === 'TaskLists' && <TaskLists />}
            {menuItem === 'Tasks' && <Tasks />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
