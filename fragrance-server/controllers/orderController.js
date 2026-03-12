const Order = require("../models/Order");
const sendOrderEmail = require("../utils/emailService");

exports.createOrder = async (req, res) => {
  try {
    const { fullName, email, phone, address, cartItems, totalAmount, paymentRef } = req.body;  // added phone

    const newOrder = new Order({
      fullName,
      email,
      phone,     // added phone here
      address,
      cartItems,
      totalAmount,
      paymentRef
    });

    const savedOrder = await newOrder.save();

    // send email to client
    // await sendOrderEmail(savedOrder);

    res.status(201).json({
      success: true,
      order: savedOrder
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to create order"
    });
  }
};