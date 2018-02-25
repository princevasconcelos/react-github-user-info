import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'

const defaultProps = {
  name: 'Prince Vasconcelos',
  bio: 'Front End Developer',
  avatar: 'https://avatars2.githubusercontent.com/u/27703956?v=4',
}

const propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
}

const Sidebar = ({name, bio, avatar}) => {

  const component = (
    <figure className='figure'> 
      <img className='avatar rounded-circle p-4' src={avatar} alt="profile"/>
      <figcaption align='right'><strong>{name}</strong><br/>{bio}</figcaption>
    </figure>

  );
  return component;
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
