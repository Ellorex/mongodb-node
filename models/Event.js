const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const EventSchema = new Schema({
    date: { type: Date, default: Date.now() },
    name: { type: String, required: true},
    users: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        //. objectID est un tableau d'identifiant. la clé ref permet de référencer à quel schéma correspond cet ID.
        // Equivalent d'une jointure en SQL
    ]
});


const Event = mongoose.model('event', EventSchema);

module.exports = Event;