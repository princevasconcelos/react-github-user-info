import React, { Component } from 'react';
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Helper from './utils/helper';
import Tabs from './components/tabs/tabs';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: 'princevasconcelos'
    }
  }

  fetchData(username) {
    Helper.getGithubInfor(username)
    .then(function(data) {
      this.setState({
        username: username,
        userInfo: data.userInfo,
        userRepos: data.userRepos,
        userStarred: data.userStarred,
      })
    }.bind(this))
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
        <Header />
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
