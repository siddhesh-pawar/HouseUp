
const {userValidation} = require("./userValidation.js");

const userRegistration = (req, res) =>{
    
    const errorMsgs = userValidation(req);

    
    if (errorMsgs.length > 0)
        return res.status(400).json({ message: errorMsgs });
    
    //adding to database
    return res.status(200).json({message : "Registration successful"});
}


module.exports = {userRegistration};
