const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const app = express();

// Connect to DB
db.connect();

const port = 3000;
const hbs = exphbs.create({
    extname: ".hbs",

}).engine;

app.engine('hbs', hbs);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'))

// HTTP
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})