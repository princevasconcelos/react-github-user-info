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

  getData(username) {
    Helper.getGithubInfor(this.state.username)
    .then(function(data) {
      this.setState({
        userInfo: data.userInfo,
        userRepos: data.userRepos,
        userStarred: data.userStarred,
      })
    }.bind(this))
  }

  userFetched = (data) => {
    this.setState({
      username: data
    })
  }

  componentDidMount() {
    this.getData(this.state.username)
  }

  componentWillUpdate() {
    this.getData(this.state.username)
  }

  render() {
    const repos = this.state.userRepos
    const starred = this.state.userStarred
    return (
      <div>
        <Header 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />

        {/* <Profile 
          name={name}
          bio={bio}
          avatar={avatar_url} /> */}
          
        {repos && <Tabs repos={repos} starred={starred} userCallback={this.userFetched} />}
      </div>
    );
  }
}

export default App;
