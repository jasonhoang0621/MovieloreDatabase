const movieController = require('../Controller/movieController');

function route(app) {


    //movie
    app.use('/', movieController.getListMovie);
}

module.exports = route;