const fs = require("fs");
const fetch = require("node-fetch")
class Repo {
  constructor(data) {
    this.name = data.name
    this.title = capitalizeWords(data.name.replace(/-/g, " "))
    this.subtitle = data.description
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
    this.date = data.created_at
    this.categories = [{name: "GitHub"}]
  }
}

function capitalizeWords(text) {
  // Split the text into words based on spaces
  const words = text.split(' ');

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  });

  // Join the capitalized words back into a single string
  return capitalizedWords.join(' ');
}

if (!fs.existsSync("./public")) fs.mkdirSync("./public");

fetch("https://api.github.com/users/reyemtm/repos?per_page=100")
.then(res => res.json())
.then(async data => {
  // fs.writeFileSync("repos.json", JSON.stringify(data,0,2))
  const repos = filterRepos(data);
  console.log(repos[0])
})
.catch(err => {
  console.log(err)
})

function filterRepos(data) {
  const filtered = data.filter(d => { 
    return !d.fork && !d.archived && (d.forks > 4 || d.watchers > 5 || d.startgazers_count > 5)&& new Date(d.updated_at) > new Date(new Date().setFullYear(new Date().getFullYear() - 1))
  })
  console.log(filtered.length)
  const repos = [];
  filtered.map(d => {
    repos.push(new Repo(d))
  })
  fs.writeFileSync("source/_data/repos.json", JSON.stringify(repos, 0, 2))
  return repos
}