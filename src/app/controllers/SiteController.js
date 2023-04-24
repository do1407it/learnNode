const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const e = require('express');
class SiteController {

    // [GET] / news
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                courses = mutipleMongooseToObject(courses);
                res.render('home', {
                    courses
                });
            })
            .catch(
                error => next(error)
            );
    }


    // [GET] / :slug
    show(req, res) {
        res.send('NEWS DETAILS')
    }
}

module.exports = new SiteController;