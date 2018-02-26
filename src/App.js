import React, { Component } from 'react';
import Header from './components/header/header'
import Profile from './components/profile/profile'
import Repository from './components/repository/repository';
import axios from 'axios'
import Tabs from './components/tabs/tabs';

const BASE_URL = 'https://api.github.com/users'
const user = 'rodgerpaulo'
 
class App extends Component {

  state = {
    userInfo: [],
    userRepos: [],
    userStarred: []
  }

  componentWillMount() {
    axios.all([
      this.getUserAccount(user),
      this.getUserRepos(user),
      this.getUserStarred(user),
    ])
    .then(axios.spread((userResponse, reposResponse, starredResponse) => {
      this.setState({
        userInfo: userResponse.data,
        userRepos: reposResponse.data,
        userStarred: starredResponse.data,
      })
    }));
  }

  getUserAccount(name) {
    return axios.get(`${BASE_URL}/${name}`);
  }

  getUserRepos(name) {
    return axios.get(`${BASE_URL}/${name}/repos`);
  }

  getUserStarred(name) {
    return axios.get(`${BASE_URL}/${name}/starred`);
  }

  render() {
    const {name, bio, avatar_url} = this.state.userInfo
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
        <Tabs repos={repos} starred={starred} />
      </div>
    );
  }
}

export default App;
