

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




// For getting orders
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



// For update Payment Method 
export const UpdateVinOrder = async (req , res)=>{



        const { orderId } = req.params
        try {

            const updatePayment = await VinOrderReport.findByIdAndUpdate( orderId , {
                    $set: {
                        paymentStatus : 'confirmed'
                    }
                
            },
                {
                    new : true  
                }
        )
        return res.json({
            success: true,
            message: "Order Updated Successfully",
            orders: updatePayment 
        });


        } catch (error) {
            
              return res.status(500).json({
            success: false,
            message: error.message
        });

        }




}