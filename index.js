const express = require("express")
const mongoose = require("mongoose")
const signupRouter = require("./routes/userRoutes/userSignup.route")
const loginRouter = require("./routes/userRoutes/userLogin.route")
const ticketRouter = require("./routes/ticketRoutes/ticket.route")
const bookmarkRouter = require("./routes/bookmarkRoute/bookmark.route")
 const authentication = require("./middlewares/authentication")
const cors = require("cors")
const app = express()
const PORT = 8080

app.use(express.json())
app.use(cors())
app.use("/signup",signupRouter)
app.use("/login",loginRouter)
app.use(authentication)
app.use("/ticket",ticketRouter)
app.use("/bookmark",bookmarkRouter)



app.listen(PORT,async()=>{
    try{
        await mongoose.connect("mongodb+srv://shubhamKapoor:kapoorshubhamkapoor@cluster0.ft06zuc.mongodb.net/mock-11-masai?retryWrites=true&w=majority")
        console.log("server started ")
    }
    catch(e){
        console.log(e)
    }
})