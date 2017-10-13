var mongoose    = require('mongoose');

var TokenSchema = new mongoose.Schema({
    UserId: { type: String, required: true, unique: true },
    Token:  { type: String, required: true, unique: true },
    Expire: { type: Date, required: true }
});

module.exports = mongoose.model('Token', TokenSchema);