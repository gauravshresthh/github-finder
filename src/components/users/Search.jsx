import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (searchText === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(searchText);
      setSearchText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search for github users...'
          value={searchText}
          onChange={onChangeHandler}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};
export default Search;
