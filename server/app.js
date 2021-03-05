const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to films.org!')
})

const filmRoutes = require('./controllers/films');
app.use('/films', filmRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})