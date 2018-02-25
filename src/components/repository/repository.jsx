import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import './repository.css'

const defaultProps = {
  name: 'New Repository',
  langIcon: 'logo-javascript',
  countIcon: 'ios-remove'
}

const propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  language: PropTypes.string,
  langIcon: PropTypes.string,
  count: PropTypes.string,
  countIcon: PropTypes.string,
}
const Repo = ({name, desc, language, langIcon, count, countIcon}) => {

  const component = (
    <div>
      <strong><a href="#">{name}</a></strong><br/>
      {desc && <span className='description text-muted'>{desc}</span>}
      <div className='wrapper text-muted'>
        {language 
          && <div>
            <Ionicon icon={langIcon} fontSize="18px" className='icon mx-2' color='gray' />
            <span>{language}</span>
          </div>
        }
        {count 
          && <div>
            <Ionicon icon={countIcon} fontSize="18px" className='icon mx-2' color='gray' />
            <span>{count}</span>
          </div>
        }
      </div>
      <hr/>
    </div>
  );
  return component;
}

Repo.propTypes = propTypes;
Repo.defaultProps = defaultProps;

export default Repo;
