const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/webhook_v3', (req, res) => {
  res.send(req.body)
})

app.post('/webhook_v3', (req, res) => {
  console.log(req.body)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})