class SiteController {

    // [GET] / news
    index(req, res) {
        res.render('home')
    }

    // [GET] / :slug
    show(req, res) {
        res.send('NEWS DETAILS')
    }
}

module.exports = new SiteController;