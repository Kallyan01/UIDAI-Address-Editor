const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    ano: {
        type: Number,
        required: true,
    },
    pin:{
        type: Number,
        required: true,
    },
});

const User = mongoose.model('User',userSchema)
module.exports = User;