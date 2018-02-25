import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
import './repository.css'

const defaultProps = {
  name: 'New Repository',
  codeIcon: 'md-code', //verificar quando for star ou repo
  branchIcon: 'md-git-branch'
}

const propTypes = {
  repos: PropTypes.array.isRequired,
}
const Repo = ({repos}) => {
console.log(repos)
  const component = repos.map((repo, index) => {
    repo.stargazers_count = `${repo.stargazers_count}`
    return (
      <li className='list-group-item' key={index}>
        {repo.name && <strong><a className='d-block'href={repo.html_url}>{repo.name}</a></strong>}
        {repo.description && <span className='font-small text-muted d-block mt-2'>{repo.description}</span>}
        {repo.language && 
          <div className='d-inline'>
            <Ionicon icon={defaultProps.codeIcon} fontSize="18px" className='vertical-align mx-2' color='gray' />
            <span className='vertical-align'>{repo.language}</span>
          </div>
        }
        {repo.stargazers_count &&
          <div className='d-inline'>
            <Ionicon icon={defaultProps.branchIcon} fontSize="18px" className='vertical-align mx-2' color='gray' />
            <span className='vertical-align'>{repo.stargazers_count}</span>
          </div>  
        }
      </li>
    )
  })
  return component;
}

Repo.propTypes = propTypes;
Repo.defaultProps = defaultProps;

export default Repo;
