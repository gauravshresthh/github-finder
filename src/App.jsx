import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get('https://api.github.com/users');
    setUser(res.data);
    setLoading(false);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <UserItem />
    </div>
  );
}

export default App;
