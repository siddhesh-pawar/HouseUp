const checkUserDetails = require('../validation/registrationDetails');

const userValidation = (req) => {

    const errorMsgs = [];
    const { name,  email, password, repassword } = req.body;

    if (!checkUserDetails.isNull(name)) {
        errorMsgs.push('Name is required');
    }


    if (!checkUserDetails.isNull(email)) {
        errorMsgs.push('Email is required');
    }
    if (!checkUserDetails.isNull(password)) {
        errorMsgs.push('Password is required');
    }
    if (!checkUserDetails.isNull(repassword)) {
        errorMsgs.push('Re-Password is required');
    }


    if (!checkUserDetails.isValidEmail(email)) {
        errorMsgs.push('Invalid email');
    }

    if (!checkUserDetails.isValidPassword(password)) {
        errorMsgs.push('Password must contain atleast 8 characters, 1 lowercase, 1 uppercase, 1 digit');
    }

    if (password !== repassword) {
        errorMsgs.push('Passwords do not match');
    }
    return errorMsgs;
};




module.exports = { userValidation };
