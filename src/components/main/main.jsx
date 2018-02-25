import React from 'react';
import Repository from '../repository/repository';
import './main.css'

const Main = ({repos}) => {
  
  const component = (
    <Repository 
      repos = {repos} />
  );
  return component;
}

export default Main;
