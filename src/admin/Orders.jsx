import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Orders</h1>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment Ref</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.fullName}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
              <td>₦{order.totalAmount}</td>
              <td>{order.status}</td>
              <td>{order.paymentRef}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;