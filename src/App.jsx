import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
