require('dotenv').config()
console.log("hi");
const express = require('express')
const github={
  "login": "IGnist",
  "id": 99944237,
  "node_id": "U_kgDOBfUHLQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/99944237?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/IGnist",
  "html_url": "https://github.com/IGnist",
  "followers_url": "https://api.github.com/users/IGnist/followers",
  "following_url": "https://api.github.com/users/IGnist/following{/other_user}",
  "gists_url": "https://api.github.com/users/IGnist/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/IGnist/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/IGnist/subscriptions",
  "organizations_url": "https://api.github.com/users/IGnist/orgs",
  "repos_url": "https://api.github.com/users/IGnist/repos",
  "events_url": "https://api.github.com/users/IGnist/events{/privacy}",
  "received_events_url": "https://api.github.com/users/IGnist/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sandeep Kumar",
  "company": null,
  "blog": "",
  "location": "Delhi",
  "email": null,
  "hireable": true,
  "bio": "Software Developer | Skilled in C++, JAVA, Python, and DSA | 15+ Project Experience | I assist organizations in enhancing their software solutions to drive effi",
  "twitter_username": null,
  "public_repos": 19,
  "public_gists": 0,
  "followers": 5,
  "following": 7,
  "created_at": "2022-02-18T05:21:54Z",
  "updated_at": "2024-06-15T18:10:12Z"
}
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/info', (req, res) => {
    res.send('Sandeep kumar!')
  })
app.get('/login',(req,res) => {
    res.send('<h1>NEW USER FOUND</h1>')
})
app.get('/github',(req,res)=>{
  res.json(github)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})