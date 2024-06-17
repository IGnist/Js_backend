require('dotenv').config()
console.log("hi");
const express = require('express')
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
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})