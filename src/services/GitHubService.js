export const GetGitHubUserData = username =>
  fetch("https://api.github.com/users/" + username).then(res => res.json());
