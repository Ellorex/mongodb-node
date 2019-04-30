const Event = require('./../models/Event');
const User = require('./../models/User');

module.exports = (app) => {
    app.post('/events', (req, res) => {
        var event = new Event(req.body.event);
        event.save().then(result => {
            console.log(result);
            res.sendStatus(201);
        });
    });

    app.get('/events', (req, res) => {
        Event.find({})
        .populate({path: 'users', model: User})
        .then(events => {
            res.send(events);
        });
    });

    app.patch('/events/:id', (req, res) => {
        var userId = req.body.userId;
        Event.findOneAndUpdate(
            { _id: req.params.id },
            { users: [userId]}, 
            { new: true}
        ).then(result => {
            console.log(result);
            res.sendStatus(200);
        })
    });
}