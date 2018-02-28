import React from 'react';
import Ionicon from 'react-ionicons';
import './search.css';

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    if(event.key === 'Enter'){
      const value = event.target.value.trim();
      if (value !== '') {
        this.props.inputValue(value)
      }
    }
  }

  render () {
    return (
      <div className='wrapper-box w-25 my-4 ml-3'>
        <Ionicon icon='ios-search-outline' fontSize="22px" 
          className='vertical-align mx-2' color='gray' />
        <input type="text" className='custom-font' name="search" 
          placeholder="Search username" onKeyPress={this.searchHandler}
             /> 
      </div>
    );
  }
}

export default Search;
