const express = require('express');
require('dotenv').config();
const cors = require('cors')

const app = express();

const route = require('./Routes');
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION, {
    useUnifiedTopology: true,
})
    .then(console.log('connect mongodb successfully'))
    .then(() => {
        //Route
        route(app);

        app.listen(port, () => console.log(`server is listening at http://localhost:${port}`));
    }
    )

