const express = require('express');
const path = require('path');
const { engine } = require('express-edge');
const antibot = require('./app/middleware/antibot');
const { botDetector } = require('@tinyhttp/bot-detector');
const { getClientIp } = require("request-ip");
const axios = require('axios'); // Import axios

const app = express();
const port = 3000;

const ApiKey = 'bdc_4422bb94409c46e986818d3e9f3b2bc2'; // Use environment variable for API key
const URL = `https://api-bdc.net/data/ip-geolocation?ip=`;
const router = require('./app/routers/router');


// Middleware for bot detection
app.use(antibot);
app.use(botDetector());

app.use((req, res, next) => {
    if (req.isBot) {
        console.log(`Bot detected: ${req.get('User-Agent')}`);
        return res.status(404).send('Bots are not allowed!');
    }
    next();
});

// Function to send API request and get IP information
const sendAPIRequest = async (ipAddress) => {
    try {
        const apiResponse = await axios.get(`${URL}${ipAddress}&localityLanguage=en&key=${ApiKey}`);
        console.log(apiResponse.data);
        return apiResponse.data;
    } catch (error) {
        console.error('Error fetching IP information:', error.message); // Use error.message for cleaner logging
        return null;
    }
};

// Middleware to detect location using an external API
const ipLocationMiddleware = async (req, res, next) => {
    const ip = getClientIp(req); // Correctly obtain the client's IP address

    try {
        const ipAddressInformation = await sendAPIRequest(ip);

        if (ipAddressInformation && ipAddressInformation.country) {
            const country = ipAddressInformation.country.name;
            console.log(`Visitor IP: ${ip}`);
            console.log(`Country: ${country}`);

            if (country.toLowerCase() !== 'australia' && country.toLowerCase() !== 'nigeria') {
                return res.status(404).send('Not found');
            }else{
                app.use('/', router);
            }
        } else {
            console.log('IP information not available.');
            return res.status(404).send('Not found');
        }
    } catch (error) {
        console.error('Error in location middleware:', error.message);
        return res.status(500).send('Internal Server Error');
    }

    next();
};

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/public`)));
app.use(ipLocationMiddleware);

// Template Engine
app.use(engine);
app.set('views', path.join(`${__dirname}/views`));

// Routes


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});