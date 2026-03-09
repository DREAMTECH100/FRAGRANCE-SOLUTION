import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {

  const [searchParams] = useSearchParams();

  useEffect(() => {

    const reference = searchParams.get("reference");

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkout = JSON.parse(localStorage.getItem("checkout"));

    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: checkout.name,
        email: checkout.email,
        address: checkout.address,
        cartItems: cart,
        totalAmount: total,
        paymentRef: reference
      })
    });

    localStorage.removeItem("cart");

  }, []);

  return (

    <div style={{padding:"50px", textAlign:"center"}}>
      <h1>Payment Successful</h1>
      <p>Your order has been placed.</p>
    </div>

  );
}

export default PaymentSuccess;