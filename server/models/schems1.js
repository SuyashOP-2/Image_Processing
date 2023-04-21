import mongoose from "mongoose"
const newSchema = new mongoose.Schema({
    email : {
        type : string,
        required : true
    },
    password : {
        type : string,
        required : true
    }
})

const collection = mongoose.model("collection", newSchema)

