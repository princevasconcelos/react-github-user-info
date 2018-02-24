import React from 'react';
import Ionicon from 'react-ionicons'

class Buttom extends React.Component {
  render() {
    return (
      <div>
        <button type='button' className='btn btn-primary'>
          <Ionicon icon="ios-add-circle" fontSize="35px" onClick={() => console.log('Hi!')} color="white"/>
        </button>
      </div>
    );
  }
}

export default Buttom;