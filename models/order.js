

import mongoose from "mongoose";


const vinorderSchema = new mongoose.Schema({

    name : {
        type : String,
    },
    email : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    vinNumber : {
        type : String
    },
    vehicleModel : {
        type : String
    },
    year : {
        type : String
    },
    paymentStatus : {
        type : String,
        default : "pending",
        enum : [ "pending" , "confirmed" , "failed"]
    }

})



const VinOrderReport = mongoose.model("VinOrderReport" , vinorderSchema)


export default VinOrderReport

