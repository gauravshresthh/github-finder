import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(null);

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

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlert = (msg, type) => {
    setNotify(msg, type);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => {
                <>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users loading={loading} users={users} />
                </>;
              }}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
