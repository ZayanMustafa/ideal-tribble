

// File : controller/order.js
// import VinOrderReport from "../models/order.js";
// export const vinOrderCollection = async (req , res) => {
//      const { name , email , phoneNumber , vinNumber , vehicleModel, year , paymentStatus } = req.body

//     const orderSave = VinOrderReport({
//         name , email , phoneNumber , vinNumber , vehicleModel , year , paymentStatus
//     })

//     await orderSave.save()
//     return res.json({
//         success : true,
//         message : "Order Confirmed",
//         orderSave
//     })
// }


// export const getVinOrderCollection = async ( req , res )=>{
//     const getOrder = await VinOrderReport.find()
//     return res.json({

//         success : true,
//         message : "Get All Orders Successfully",
//         getOrder
//     })
// }



// File: controller/order.js
import VinOrderReport from "../models/order.js";

export const vinOrderCollection = async (req, res) => {
    try {
        const { name, email, phoneNumber, vinNumber, vehicleModel, year } = req.body;

        const orderSave = new VinOrderReport({
            name,
            email,
            phoneNumber,
            vinNumber,
            vehicleModel,
            year,
            paymentStatus: "pending" // Default status
        });

        const savedOrder = await orderSave.save();

        return res.json({
            success: true,
            message: "Order Confirmed",
            order: savedOrder // Changed from orderSave to order
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export const getVinOrderCollection = async (req, res) => {
    try {
        const getOrder = await VinOrderReport.find();
        return res.json({
            success: true,
            message: "Get All Orders Successfully",
            orders: getOrder
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
