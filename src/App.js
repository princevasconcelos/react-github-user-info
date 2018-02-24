import React, { Component } from 'react';
import Navbar from './components/navbar/navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />
      </div>
    );
  }
}

export default App;
