const movieRouter = require('./movie');
const userRouter = require('./user');

function route(app) {

    //user
    app.post('/user', userRouter);

    //movie
    app.use('/', movieRouter);
}

module.exports = route;