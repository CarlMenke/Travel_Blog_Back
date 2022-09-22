const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema (
    {
        name: {type: String, required: true},
        location: {type : String , required: true},
        content: {type: String , required: true},
        likes: {type: Number, required: true},
    },
    {timestamps:true},
)

module.exports = mongoose.model('post', Post)

