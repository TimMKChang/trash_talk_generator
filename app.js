// include packages and server variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generateTrashTalk')
const app = express()
const port = 3000

// init handlebars
const Handlebars = require('handlebars')

// register helper
Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {
  switch (operator) {
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this)
    default:
      return options.inverse(this)
  }
})

// setting template engine
app.engine('handlebars', exphbs({ defaultLayouts: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index', { trashTalk: generateTrashTalk(req.body.target), target: req.body.target })
})

// listening for connections
app.listen(port, () => {
  console.log(`Now is listening on localhost:${port}`)
})
