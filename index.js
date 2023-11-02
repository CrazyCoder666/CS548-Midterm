import https from 'https';
import fs from 'fs';
import express from 'express';
import dotenv from 'dotenv';
import { tracker } from './routes/monitor.js';

// Define the port for the server to listen on
const port = 8080;

// Load environment variables from .env file
dotenv.config();

/**
 * Options for HTTPS server setup.
 * Reads SSL/TLS certificates from the local filesystem.
 */
const httpsOptions = {
    key: fs.readFileSync('key.pem'),    // Private key for the server
    cert: fs.readFileSync('cert.pem')   // Public certificate provided by a CA
};

// Initialize the express app
const app = express();

// Create an HTTPS server using the provided options and the express app
const server = https.createServer(httpsOptions, app);

// Middleware for parsing JSON request bodies
app.use(express.json());

// Attach the tracking router to the root endpoint
app.use('/', tracker);

// Start the HTTPS server on the specified port
server.listen(port, () => {
    console.log(`HTTPS server is up and running on port ${port}`);
});


