const express = require("express");
const router = express.Router(); // manejador de rutas de express
const beneficiarioSchema = require("../models/beneficiarios");

// Nuevo beneficiario
router.post("/beneficiarios", (req, res) => {
    const beneficiario = beneficiarioSchema(req.body);
    beneficiario
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/beneficiarios", (req, res) => {
    beneficiarioSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.put("/beneficiarios/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, type } = req.body;
    beneficiarioSchema
        .updateOne({ _id: id }, { $set: { name, age, type } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.delete("/beneficiarios/:id", (req, res) => {
    const { id } = req.params;
    beneficiarioSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;