const fs = require("fs");
const fetch = require("node-fetch")
class Repo {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.repo = data.html_url
    this.language = data.language
    this.homepage = data.homepage
    this.stars = data.stargazers_count
    this.forks = data.forks
    this.watcher = data.watchers
    this.created = data.created_at
    this.updated = data.updated_at
    this.archived = data.archived
    this.forked = data.forked
  }
}

fetch("https://api.github.com/users/reyemtm/repos?per_page=100")
.then(res => res.json())
.then(data => {
  fs.writeFileSync("repos.json", JSON.stringify(data,0,2))
  filterRepos(data)
})
.catch(err => {
  console.log(err)
})

function filterRepos(data) {
  const filtered = data.filter(d => { 
    return !d.fork && !d.archived && (d.forks > 1 || d.watchers > 4 || d.startgazers_count > 2)&& new Date(d.updated_at) > new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  })
  console.log(filtered.length)
  const repos = [];
  filtered.map(d => {
    repos.push(new Repo(d))
  })
  fs.writeFileSync("source/_data/repos.json", JSON.stringify(repos, 0, 2))
  return filtered
}