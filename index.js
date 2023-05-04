const express = require('express')
const app = express()
const port =process.env.PORT || 5000
const Chef = require('./Data/Chef.json')
const Recipe = require('./Data/Recipe.json')
const cors = require('cors')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Spice-Journey-Server in Running!')
})
app.get('/chef', (req, res) => {
  res.send(Chef)
})
app.get('/recipe', (req, res) => {
  res.send(Recipe)
})

app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = Chef.find(n => n.id === id);
  res.send(selectedChef);
})





app.listen(port, () => {
  console.log(`Spice-Journey-Server in running on port ${port}`)
})