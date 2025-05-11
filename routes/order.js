


import express from "express"
import { getVinOrderCollection, vinOrderCollection } from "../controller/order.js"


const router = express.Router()





//  Post All orders : 
router.post ("/" , vinOrderCollection )




router.get("/admin" , getVinOrderCollection)



export default router
