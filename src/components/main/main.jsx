import React from 'react';
import Repository from '../repository/repository';
import Searchbar from '../searchbar/searchbar'
import './main.css'

const Main = ({repos}) => {
  
  const component = (
    <div className='ml-5'>
      <Searchbar />
      <Repository 
        repos = {repos} />
    </div>
  );
  return component;
}

export default Main;
