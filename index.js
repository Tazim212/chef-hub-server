const express = require('express');
const app = express()
const cors = require('cors');
const chefData = require('./chefData.json');
const port = process.env.PORT || 5000

app.use(cors());

app.get('/', (req, res) => {
  res.send('done')
})
app.get('/chefdata', (req, res) => {
  res.send(chefData)
})
app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const item = chefData?.find(dt => dt.id == id)
  res.send(item)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})