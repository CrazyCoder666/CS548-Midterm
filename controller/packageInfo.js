import axios from 'axios';

// Function to get tracking information based on provided order number
export const trackInfo = async (orderNumber) => {
    // Initialization
    const trackingMoreAPIKey = process.env.TRACKING_MORE_API_KEY;
    const commonHeaders = {
        'Tracking-Api-Key': trackingMoreAPIKey,
        'Content-Type': 'application/json',
    };

    console.log("Fetching track info from TrackingMore API...");

    // Detect courier based on order number
    const detectApiUrl = 'https://api.trackingmore.com/v3/trackings/detect';
    const courierDetected = await axios.post(detectApiUrl, { tracking_number: orderNumber }, { headers: commonHeaders });
    
    // If no courier detected, throw an error
    if (courierDetected?.data?.data?.length === 0) {
        console.log("No courier detected for the given order number.");
        throw new Error('Courier not detected');
    }

    // Fetch courier code from the response
    const courierCode = courierDetected.data.data[0].courier_code;

    // Create a tracking event with detected courier and order number
    const createTrackApiUrl = 'https://api.trackingmore.com/v4/trackings/create';
    try {
        await axios.post(createTrackApiUrl, {
            tracking_number: orderNumber,
            courier_code: courierCode,
        }, { headers: commonHeaders });
    } catch (error) {
        // Handle cases where tracking might already exist in the system
        console.log("Error occurred. Ignoring if tracking already exists.");
    }

    // Fetch latest tracking details for the order number
    const trackingMoreApiUrl = `https://api.trackingmore.com/v4/trackings/get?tracking_numbers=${orderNumber}`;
    console.log(`Fetching data from: ${trackingMoreApiUrl}`);

    // Retrieve tracking data from TrackingMore API
    const trackingMoreResponse = await axios.get(trackingMoreApiUrl, { headers: commonHeaders });
    
    // return trackingMoreResponse?.data;
}
