const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuarioSchema = require("../models/usuario");
 //Nuevo animal
router.post("/usuario", (req, res) => {
    const animal = usuarioSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
router.get("/usuario", (req,res)=>{
    usuarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
})
;
 module.exports = router;
