const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema (
    {
        name: {type: String, required: true},
        content: {type: String , required: true},
        post_id : {type: ObjectId, required: true}
    },
    {timestamps:true},
)

module.exports = mongoose.model('comment', Comment)