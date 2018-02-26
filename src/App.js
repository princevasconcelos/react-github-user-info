import React, { Component } from 'react';
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Helper from './utils/helper';
import Tabs from './components/tabs/tabs';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'rodgerpaulo'
    }
  }

  fetchData(username) {
    Helper.getGithubInfor(username)
    .then(function(data) {
      console.log('then')
      this.setState({
        username: username,
        userInfo: data.userInfo,
        userRepos: data.userRepos,
        userStarred: data.userStarred,
      })
    }.bind(this))
    .catch(console.log('Usuário não encontrado'))
  }

  userFetched = (data) => {
    this.fetchData(data)
  }

  componentDidMount() {
    this.fetchData(this.state.username)
  }

  render() {
    const info = this.state.userInfo
    const repos = this.state.userRepos
    const starred = this.state.userStarred
    
    return (
      <div>
        <Header 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />

        {info && <Profile 
          name={info.name} bio={info.bio}
          avatar={info.avatar_url} />}
          
        {repos && <Tabs 
          repos={repos} starred={starred} 
          userCallback={this.userFetched} />}
      </div>
    );
  }
}

export default App;
