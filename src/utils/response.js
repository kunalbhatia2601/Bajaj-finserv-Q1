const sendResponse = (res, statusCode, success, data = null) => {
    res.status(statusCode).json({
        is_success: success,
        official_email: 'kunal0638.be23@chitkara.edu.in',
        data: data ? data : undefined,
    });
};

export default sendResponse;
