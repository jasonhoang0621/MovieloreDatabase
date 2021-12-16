const movieRouter = require('./movie');
const userRouter = require('./user');
const commentRouter = require('./comment');

function route(app) {

    //comment
    app.use('/comment', commentRouter);

    //user
    app.use('/user', userRouter);

    //movie
    app.use('/', movieRouter);
}

module.exports = route;