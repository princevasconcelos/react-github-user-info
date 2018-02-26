import React from 'react';
import Ionicon from 'react-ionicons';
import './search.css';
import Helper from '../../utils/helper';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'rodgerpaulo'
    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentWillMount() {
    Helper.getGithubInfor(this.state.username)
      .then(function(data) {
        this.setState({
          userInfo: data.userInfo,
          userRepos: data.userRepos,
          userStarred: data.userStarred,
        })
      }.bind(this))
  }

  searchHandler(event) {
    if(event.key === 'Enter'){
      const value = event.target.value.trim();
      if (value !== '') {
        this.setState({
          user: value
        })
      }
    }
  }

  render () {
    return (
      <div className='wrapper-box w-25 my-4'>
      <Ionicon icon='ios-search-outline' fontSize="22px" 
        className='vertical-align mx-2' color='gray' />
      <input type="text" className='custom-font' name="search" 
        placeholder="Filter by name" onKeyPress={this.searchHandler} /> 
    </div>
    );
  }
}

export default Search;
