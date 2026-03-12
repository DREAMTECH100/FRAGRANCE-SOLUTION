const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String
  },

  address: {
    type: String,
    required: true
  },

  cartItems: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],

  totalAmount: {
    type: Number,
    required: true
  },

  paymentRef: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "paid"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Order", OrderSchema)