import React from 'react';
import Ionicon from 'react-ionicons';
import './searchbar.css'

const Searchbar = ({}) => {
  const component = (
    <div className='wrapper-box w-25 mx-5 my-5'>
      <Ionicon icon='ios-search-outline' fontSize="22px" className='vertical-align mx-2' color='gray' />
      <input type="text" className='custom-font' name="search" placeholder="Filter by name" /> 
    </div>
  );
  return component;
}

export default Searchbar;