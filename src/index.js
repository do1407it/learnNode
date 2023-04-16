const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hbs = exphbs.create({
    extname: ".hbs"
}).engine;

app.engine('hbs', hbs);
app.set('view engine', 'hbs');
app.set('views', 'src/resource/views');

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})