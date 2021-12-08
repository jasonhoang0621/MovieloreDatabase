const movieRouter = require('./movie');
const userRouter = require('./user');

function route(app) {

    //user
    app.use('/user', userRouter);

    //movie
    app.use('/', movieRouter);
}

module.exports = route;