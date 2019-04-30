const User = require('./../models/User');

module.exports = (app) => {

    app.get('/users', (req, res) => {
        User.find({},{"id":0, "__v":0}).then(users => {
            res.send(users);
        });
    });

    app.get('/members', (req, res) => {
        User.find({'member': true}, {"__id": 0, "__v":0}).then(users => {
            res.send(users);
        });
    });

    app.post('/users', (req, res) => {
        var user = new User(req.body.user);
        user.save().then(newUser => {
            res.status(201).send(newUser._id);
        });
    });
    app.patch('/users/:id', (req, res) => {
        var user = new User(req.body.user);
        User.findByIdAndUpdate(req.params.id, {member: user.member}).then(() => {
            res.sendStatus(200);
        });
    });
    app.delete('/users/:id', (req, res) => {
        User.findByIdAndDelete({__id: req.params.id}).then(users => {
            let statusCode = result ? 200 : 404;
            res.sendStatus(statusCode);
        })
    })
}