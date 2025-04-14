const mongoose = require("mongoose");

const donacionSchema = mongoose.Schema({
  donorName: { type: String, required: true },
  donorType: { type: String, enum: ['Persona', 'Empresa'], required: true },
  contactInfo: {
    email: { type: String },
    phone: { type: String }
  },
  donationDate: { type: Date, default: Date.now },
  items: [
    {
      itemName: { type: String },
      quantity: { type: Number },
      unit: { type: String }
    }
  ],
  deliveryMethod: { type: String, enum: ['Presencial', 'Envio'] },
  receivedBy: { type: String },
  notes: { type: String },
  verified: { type: Boolean, default: false }
});

module.exports = mongoose.model("Donacion", donacionSchema);
