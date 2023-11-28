const bcrypt = require('bcrypt');
const { userValidation } = require("./userValidation.js");

const userRegistration = async (req, res) => {
    const { name, email, password } = req.body;
    const errorMsgs = userValidation(req);


    if (errorMsgs.length > 0)
        return res.status(400).json({ message: errorMsgs });

    //adding to database
    else {
        try {

            const saltRounds = process.env.SALT_ROUNDS;
            const hashedPassword = bcrypt.hash(password, saltRounds);

            await pool.query(
                'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
                [name, email, hashedPassword]
            );

            return res.status(200).json({ message: "Registration successful" });

        }
        catch(error){
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        

    }


}
module.exports = { userRegistration };
