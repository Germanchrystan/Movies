const axios = require("axios");
require('dotenv').config();
const {
    APIKEY
} = process.env;

const getMovies = async (req,res)=>{
    
    const { title } = req.query;

    const { data } = await axios(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${title}`);

    return res.json(data).status(200);
}    

module.exports = getMovies;