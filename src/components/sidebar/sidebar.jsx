import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'

const propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
}

const Sidebar = ({name, bio, avatar}) => {

  const component = (
    <figure className='figure'> 
      <img className='avatar rounded-circle p-4' src={avatar} alt="profile"/>
      <figcaption align='right'>{name && <strong>{name}</strong>}<br/>{bio}</figcaption>
    </figure>

  );
  return component;
}

Sidebar.propTypes = propTypes;

export default Sidebar;
