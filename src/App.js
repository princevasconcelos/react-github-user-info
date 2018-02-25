import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
//import Main from './components/main/main';
import Repository from './components/repository/repository';


class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Navbar 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />
        {/* <Sidebar 
          name='Roger Ramos'
          bio='Front End Dev and UI Designer'
          avatar='https://avatars0.githubusercontent.com/u/3275772?v=4' /> */}
        <Repository 
          name='todo-backend'
          language='Javascript'
          langIcon='md-code'
          count='999'
          countIcon='md-git-branch'
          desc='descrição descrição descrição descrição descrição descrição ' />
      </div>
    );
  }
}

export default App;
