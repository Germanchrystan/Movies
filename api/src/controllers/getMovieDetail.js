const axios = require("axios");
require('dotenv').config();
const {
    APIKEY
} = process.env;

const getMovieDetail = async (req,res)=>{
    
    const { id } = req.params;

    const { data } = await axios(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${id}`);

    return res.json(data).status(200);
}    

module.exports = getMovieDetail;