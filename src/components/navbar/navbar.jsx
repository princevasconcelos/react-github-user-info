import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const defaultProps = {
  color: '#837278',
  brandIconColor: 'white',
  textColor: 'white',
}

const propTypes = {
  color: PropTypes.string,
  brandIcon: PropTypes.string,
  brandIconColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textColor: PropTypes.string,
}

const Navbar = ({color, brandIcon, brandIconColor, title, subtitle, textColor}) => {

  const textColorStyle = {
    color: textColor
  }
  
  const navbarStyle = {
    backgroundColor: color,
  }
  
  const component = (
    <nav className='navbar' style={navbarStyle}>
      <a className='navbar-brand' href="#">
        {brandIcon && <Ionicon icon={brandIcon} fontSize="30px" className='align-top mx-2' color={brandIconColor}/>}
        <span style={textColorStyle}>{{title} && <strong>{title}</strong> } {subtitle}</span>
      </a>
    </nav>
  );
  return component;
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
