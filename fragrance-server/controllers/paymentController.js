const axios = require("axios")

exports.initializePayment = async (req, res) => {
  try {

    const { email, amount } = req.body

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      {
        email,
        amount: amount * 100,
        callback_url: "http://localhost:5173/order-success"
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json"
        }
      }
    )

    res.json(response.data)

  } catch (error) {
    res.status(500).json({ message: "Payment initialization failed" })
  }
}