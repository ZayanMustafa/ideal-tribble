


import express from "express"
import { getVinOrderCollection, UpdateVinOrder, vinOrderCollection } from "../controller/order.js"


const router = express.Router()





//  Post All orders : 
router.post ("/" , vinOrderCollection )




router.get("/admin" , getVinOrderCollection)



router.put('/admin/:orderId' , UpdateVinOrder )

export default router
