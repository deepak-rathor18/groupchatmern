let express = require("express")
let mongoose = require("mongoose")
let userRouter = require("./src/Routes/userRoutes")
// let messageRouters = require("./src/Routes/messagesRoutes")
let messageRouters=require("./src/Routes/messagesRoutes")

let app = express()

let cors=require("cors")

app.use(express.json())

require("dotenv").config();   // process object me daal deti hai 

let port = process.env.PORT;
app.use(cors())

mongoose.connect(process.env.DATABASE_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("database connected sucessfullly")
}).catch((err)=>{
    console.log(err);
})

// let UserModel = require("./src/models/userModel")
// let addUser = require("./src/controler/userControler")

// app.get("/addUser",getUser)

app.use("/",userRouter)
app.use("/message",messageRouters)



app.listen(port,(err)=>{
    if(err)
    {
        console.log("something is wrong")
    }

    console.log(`server is running on port ${port}`)
})