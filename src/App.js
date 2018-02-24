import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />
        <Sidebar 
          name='Roger Ramos'
          bio='Front End Dev and UI Designer'
          avatar='https://avatars0.githubusercontent.com/u/3275772?v=4' />
      </div>
    );
  }
}

export default App;
