// imports
const express = require("express")
const app = express()
const port = 5000


const main = require('./src/main')


app.set('views', './views')
app.set('view engine', 'ejs');


// static files 
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/assets/style.css'))
app.use('/js', express.static(__dirname + 'public/main.js'))


app.get('/', (req, res) => {
    res.render('index', {
        price:"£149.00",
        heading: "An Introduction to the Biggest Mysteries of the Cosmos ",
        description: "This course introduces what we know about the universe, before exploring four key mysteries that are the focus of cutting-edge research in cosmology.",
        type: "52",
        lesson: "Lesson"
    })
})

// Listening to port
app.listen(port, () => (console.info(`Listening to port ${port}`)));