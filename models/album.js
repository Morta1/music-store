const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const AlbumSchema = Schema({
    name: { type: String, require: true },
    year: { type: String, require: true},
    added: { type: String, require: true },
    price: { type: String, require: true },
    genre : { type: String, require: true },
    availability : { type: String, require: true },
    shortDesc : { type: String, require: true },
    longDesc : { type: String, require: true },
    albumImages : [{ type: String, require: true }],
});



const Album = mongoose.model( 'Album' , AlbumSchema );

module.exports = {Album};
