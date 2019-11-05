const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const shitTalkGenerator = require('./shit_talk_generator')
const port = 3000

// static resource
app.use(express.static('public'))

// setting layouts
app.engine('handlebars',exphbs({defaultLayouts: 'main'}))
app.set('view engine','handlebars')

// setting bodyparser to receive the data of POST
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/', (req,res) => {
    res.render('index',{style: 'index.css'})
})

app.post(('/'), (req, res)=> {
    let character = {}
    let target = req.body.target
    if (target === 'engineer') {
        character.engineer = 1
    } else if (target === 'designer') {
        character.designer = 1
    } else {
        character.entrepreneur = 1
    }

    res.render('index', {
        style: 'index.css',
        character: character,
        shitTalk: shitTalkGenerator(target)
    })
})
// listen and start the server
app.listen(port, () => {
    console.log(`http://localhost:${port} is starting!`)
})