const mongoose = require('mongoose');
var express = require('express');
const User = require('./models/User');
var app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/events');
const userRoutes = require('./routes/user');


// Middlewares
app.use(bodyParser.json());

var connection = mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser : true});


connection.then(res => {
    console.log("mongodb connecté");
    // insertUser();

    //routes
    eventRoutes(app);
    userRoutes(app);

    app.listen(PORT, () => {
        console.log(`Serveur écoutant le port ${PORT}`);
    })
})
