import React from 'react';
import PropTypes from 'prop-types';
import './profile.css'

const propTypes = {
  name: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
}

const Profile = ({name, bio, avatar}) => {

  const component = (
    <div className='profile-wrapper'>
      <figure className='figure'> 
        <img className='avatar rounded-circle p-4' src={avatar} alt="profile"/>
        <figcaption align='right'>{name && <strong>{name}</strong>}<br/>{bio}</figcaption>
      </figure>
    </div>


  );
  return component;
}

Profile.propTypes = propTypes;

export default Profile;
