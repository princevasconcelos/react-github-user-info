import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Repository from './components/repository/repository';
import axios from 'axios'

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
        userStarred: starredResponse,
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
    return (
      <div>
        <Navbar 
          color='#24292e'
          brandIcon='logo-github'
          title='Github'
          subtitle='profiles' />
        <Sidebar 
          name={name}
          bio={bio}
          avatar={avatar_url} 
          />
        {/* <Repository 
          repos = {repos} /> */}
      </div>
    );
  }
}

export default App;
