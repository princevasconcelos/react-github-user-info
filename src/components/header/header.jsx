import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';

const defaultProps = {
  color: '#24292e',
  icon: 'logo-github',
  iconColor: 'white',
  title: 'Github',
  subtitle: 'profiles' ,
  textColor: 'white',
}

const propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textColor: PropTypes.string,
}

const Header = ({color, icon, iconColor, title, subtitle, textColor}) => {

  const textColorStyle = {
    color: textColor
  }
  
  const headerStyle = {
    backgroundColor: color,
  }
  
  const component = (
    <nav className='navbar' style={headerStyle}>
      <a className='navbar-brand' href="">
        {icon && <Ionicon icon={icon} id='header-logo' fontSize="30px" className='align-top mx-2' color={iconColor}/>}
        <span style={textColorStyle}>{{title} && <strong>{title}</strong> } {subtitle}</span>
      </a>
    </nav>
  );
  return component;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
