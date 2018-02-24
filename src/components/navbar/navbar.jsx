import React from 'react';
import Ionicon from 'react-ionicons';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-custom"> 
        <a className="navbar-brand" href="#">
          <Ionicon icon="logo-github" fontSize="30px" className='align-top mx-2' color="white"/>
        <strong>Github</strong> profiles
        </a>
      </nav>
    );
  }
}

export default Navbar;
//24292e