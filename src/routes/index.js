
const newsRouter = require('./news');
const courseRouter = require('./course');
const siteRouter = require('./site');

const route = (app) => {
    app.use('/news', newsRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)
}

module.exports = route;
