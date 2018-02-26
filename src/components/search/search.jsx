import React from 'react';
import Ionicon from 'react-ionicons';
import './search.css'
import axios from 'axios'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: 'rodgerpaulo'
    }
    this.searchHandler = this.searchHandler.bind(this);
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
