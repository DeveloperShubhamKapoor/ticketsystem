const mongoose = require("mongoose")

const bookmarkSchema = new mongoose.Schema({
    category:{type:String,required:true},
    title:{type:String,required:true},
    userId:{type:String},
    message:{type:String,required:true},
    date:{type:String,required:true}
})

const BookmarkModel = mongoose.model("bookmark",bookmarkSchema)

module.exports = BookmarkModel