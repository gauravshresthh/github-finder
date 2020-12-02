import React, { useState } from 'react';

const Search = (props) => {
  const [searchText, setSearchText] = useState('');

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.searchUsers(searchText);
    setSearchText('');
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={searchText}
          onChange={onChangeHandler}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
