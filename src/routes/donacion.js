const express = require("express");
const router = express.Router();
const Donacion = require("../models/donacion");

router.post("/donacion", (req, res) => {
  const nuevaDonacion = new Donacion(req.body);
  nuevaDonacion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/donacion", (req, res) => {
  Donacion.find()
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.get("/donacion/:id", (req, res) => {
  Donacion.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((error) => res.status(404).json({ message: "No encontrada" }));
});

router.put("/donacion/:id", (req, res) => {
  Donacion.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => res.json(data))
    .catch((error) => res.status(400).json({ message: error.message }));
});

router.delete("/donacion/:id", (req, res) => {
  Donacion.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Donación eliminada" }))
    .catch((error) => res.status(400).json({ message: error.message }));
});

module.exports = router;