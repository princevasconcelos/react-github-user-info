import React from 'react';
import './sidebar.css'

const Sidebar = ({name, bio, avatar}) => {

  const component = (
    <figure className='figure'> 
      <img className='avatar rounded-circle p-4' src={avatar} alt="Profile picture"/>
      <figcaption align='right'><strong>{name}</strong><br/>{bio}</figcaption>
    </figure>

  );
  return component;
}

export default Sidebar;

//text-center

      {/* <div className="wrapper">
        <figcaption className='large-font'><strong>{name}</strong></figcaption>
        <figcaption className='figure-caption'>{bio}</figcaption>
      </div> */}