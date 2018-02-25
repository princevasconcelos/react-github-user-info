import React from 'react';
import Ionicon from 'react-ionicons';
import './search.css'

const Search = ({}) => {
  const component = (
    <div className='wrapper-box w-25 my-4'>
      <Ionicon icon='ios-search-outline' fontSize="22px" className='vertical-align mx-2' color='gray' />
      <input type="text" className='custom-font' name="search" placeholder="Filter by name" /> 
    </div>
  );
  return component;
}

export default Search;