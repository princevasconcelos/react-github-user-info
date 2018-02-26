import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import './repository.css'

const defaultProps = {
  name: 'New Repository',
  codeIcon: 'md-code',
  branchIcon: 'md-git-branch',
  starIcon: 'md-star',
}

const propTypes = {
  data: PropTypes.array.isRequired,
  isStarred: PropTypes.bool.isRequired
}
const Repo = ({data, isStarred}) => {
  
  const component = data.map((repo, index) => {
    repo.stargazers_count = `${repo.stargazers_count}`
    return (
      <li className='list-group-item' key={index}>
        {repo.name && <strong><a className='d-table-row'href={repo.html_url}>{repo.name}</a></strong>}
        {repo.description && <span className='font-small text-muted d-flex mt-2'>{repo.description}</span>}
        <div className='d-flex my-1'>
          {repo.language && 
            <div className='d-inline mr-4'>
              <Ionicon 
                icon={(isStarred) ? defaultProps.starIcon : defaultProps.codeIcon} 
                fontSize="18px" 
                className='vertical-align mr-1' 
                color='gray' />
              <span className='vertical-align small-gray'>{repo.language}</span>
            </div>
          }
          {repo.stargazers_count &&
            <div className='d-inline'>
              <Ionicon 
                icon={defaultProps.branchIcon} 
                fontSize="18px" 
                className='vertical-align mr-1' 
                color='gray' />
              <span className='vertical-align small-gray'>{repo.stargazers_count}</span>
            </div>  
          }
        </div>
      </li>
    )
  })
  return (
    <ul className='list-group list-group-flush'>
      {component}
    </ul>
    );
}

Repo.propTypes = propTypes;
Repo.defaultProps = defaultProps;

export default Repo;
