import express from 'express';
import { trackInfo } from '../controller/packageInfo.js';
import { getTrackingNumber } from '../controller/packageDetailGetter.js';

export const tracker = express.Router();


function refineTrackingInfo(trackingInfo, orderNumber) {
    const refinedInfo = { ...trackingInfo }; // Clone trackingInfo without modifying original
    refinedInfo.status = refinedInfo.meta;
    delete refinedInfo.meta;
    refinedInfo.data[0].order_number = orderNumber;
    return refinedInfo;
}

tracker.post('/monitor', async (req, res) => {
    const orderNumber = req.body.orderNumber;

    // Check if order number is provided
    if (!orderNumber) {
        return res.status(400).json({
            status: {
                code: 400,
                message: 'Order number is required',
            },
        });
    }

    console.log(`Received request for order ${orderNumber}`);

    try {
        const trackNumber = getTrackingNumber(orderNumber);
        if (!trackNumber) {
            throw new Error('Tracking number not found');
        }

        console.log(`Tracking number for order ${orderNumber} is ${trackNumber}`);
        
        const trackingInfo = await trackInfo(trackNumber);
        const refinedTrackingInfo = refineTrackingInfo(trackingInfo, orderNumber);

        // Send the refined trackingInfo as the response
        res.status(200).json(refinedTrackingInfo);
    } catch (error) {
        console.error(`Error processing order ${orderNumber}: ${error.message}`);

        // Handle errors and send an error response
        res.status(400).json({
            status: {
                code: 400,
                message: error.message,
            },
        });
    }
});
