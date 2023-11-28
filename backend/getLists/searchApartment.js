const pool = require("../models/schema");

const searchApartment = async(req, res)=>{

        const { apt_name, owner, rent } = req.query;
    
        let query = 'SELECT * FROM apartment WHERE TRUE';
    
        if (apt_name) {
            query += ` AND apt_name = '${apt_name}'`;
        }
    
        if (owner) {
            query += ` AND owner = '${owner}'`;
        }
    
        if (rent) {
            query += ` AND rent = ${rent}`;
        }
    
        try {
            const result = await pool.query(query);
            const apartments = result.rows;
    
            // console.log('Apartments:', apartments);
            res.status(200).json({message: apartments });
        } catch (error) {
            // console.error('Error executing database query:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
        finally{
            await pool.end();
        }

}

module.exports = {searchApartment};