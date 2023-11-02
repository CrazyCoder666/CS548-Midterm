// Sample order tracking information
const orderDetails = [
    { orderId: "2000003155272", trackId: "2000003155272" },
    { orderId: "04-10144-80286", trackId: "772354242262" },
    { orderId: "123456789", trackId: "6860010537552" },
    { orderId: "9104223295", trackId: "9104223295" }
]

// Function to retrieve tracking ID based on provided order ID
export const getTrackingNumber = (searchOrderId) => {
    console.log(`Fetching track ID for order: ${searchOrderId}`)

    for (const order of orderDetails) {
        console.log(`Examining order: ${order.orderId}`)

        if (order.orderId === searchOrderId) {
            return order.trackId
        }
    }

    return null  // No match found for the provided order ID
}
