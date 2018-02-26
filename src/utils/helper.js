import axios from 'axios'
const BASE_URL = 'https://api.github.com/users'

function getUserAccount(username) {
  return axios.get(`${BASE_URL}/${username}`);
}

function getUserRepos(username) {
  return axios.get(`${BASE_URL}/${username}/repos`);
}

function getUserStarred(username) {
  return axios.get(`${BASE_URL}/${username}/starred`);
}

var Helper = {
  getGithubInfor: function(username) {
    return axios.all([
      getUserAccount(username),
      getUserRepos(username),
      getUserStarred(username),
    ])
    .then(axios.spread((userResponse, reposResponse, starredResponse) => {
      return {
        userInfo: userResponse.data,
        userRepos: reposResponse.data,
        userStarred: starredResponse.data,
      }
    }))
  }
}

export default Helper;