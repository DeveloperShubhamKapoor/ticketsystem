const mongoose = require("mongoose")

const ticketSchema = new mongoose.Schema({
    category:{type:String,required:true},
    title:{type:String,required:true},
    userId:{type:String},
    message:{type:String,required:true},
    date:{type:String,required:true}
})

const TicketModel = mongoose.model("ticket",ticketSchema)

module.exports = TicketModel