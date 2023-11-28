const pool = require("../models/schema");

const getApartmentNames = async(req, res) =>{
    try {
        const result = await pool.query('SELECT DISTINCT apt_name FROM apartments');
        const distinctAptNames = result.rows.map(row => row.apt_name);
        return res.status(200).json({message: distinctAptNames});
    } catch (error) {
        return res.status(400).json({message: 'error fetching apartment names'});
    } finally {
       
        await pool.end();
    }
}

module.exports = {getApartmentNames}