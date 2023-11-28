const jwt = require('jsonwebtoken');
const pool = require('../models/schema');
const bcrypt = require("bcrypt");

const userLogin = async(req, res) =>{

    const {email, password} = req.body;
    const errorMsgs = [];

    try{
        if(!email || !password){
            return res.status(400).json({message: "Email or Password is empty"});
        }

        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if(result.rows.length > 0){
            const user = result.rows[0];
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY);
                return res.status(200).json({ message: token });
            } 
            else {
                return res.status(400).json({ message: "Invalid credentials" });
            }

        }
        else{
            res.status(400).json({message: "Invalid credentials"});
        }
        
    }
    catch(e){
        return res.status(500).json({message: "Internal server error"});
    }
    


    if (errorMsgs.length > 0)
        return res.status(400).json({ message: errorMsgs });
    
}


module.exports = {userLogin};
