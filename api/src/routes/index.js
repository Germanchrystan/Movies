const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//========================================================//
const getMovies = require('../controllers/getMovies');
const getMovieDetail = require ("../controllers/getMovieDetail");
//========================================================//

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//==========================================================//
router.get("/movies", getMovies)
//=========================================================//
router.get("/movies/:id", getMovieDetail)
//========================================================//





module.exports = router;
