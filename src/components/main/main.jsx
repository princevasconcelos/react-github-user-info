import React from 'react';
import Repository from '../repository/repository';
import Search from '../search/search'
import Tabs from '../tabs/tabs'
import './main.css'

const Main = ({repos}) => {
  
  const component = (
    <div className='ml-5'>
      <Tabs />
      {/* <Search />
      <Repository 
        repos = {repos} /> */}
    </div>
  );
  return component;
}

export default Main;
