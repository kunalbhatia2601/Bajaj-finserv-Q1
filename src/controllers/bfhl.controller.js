import sendResponse from '../utils/response.js';

export const getBfhl = (req, res) => {
    sendResponse(res, 200, true, 'Welcome to the Bajaj Finserv API');
};
