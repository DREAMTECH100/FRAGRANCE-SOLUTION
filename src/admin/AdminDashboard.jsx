import { useEffect, useState } from "react";

function AdminDashboard() {

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/admin/orders")
      .then(res => res.json())
      .then(data => setOrders(data));

    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  return (

    <div style={{ padding: "40px" }}>

      <h1>Admin Dashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "20px",
        marginTop: "30px"
      }}>

        <div style={{border:"1px solid #ccc",padding:"20px"}}>
          <h3>Total Orders</h3>
          <h2>{orders.length}</h2>
        </div>

        <div style={{border:"1px solid #ccc",padding:"20px"}}>
          <h3>Total Products</h3>
          <h2>{products.length}</h2>
        </div>

        <div style={{border:"1px solid #ccc",padding:"20px"}}>
          <h3>Total Revenue</h3>
          <h2>₦{totalRevenue}</h2>
        </div>

      </div>

      <h2 style={{marginTop:"40px"}}>Recent Orders</h2>

      <table border="1" cellPadding="10" style={{marginTop:"20px"}}>

        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {orders.slice(0,5).map(order => (

            <tr key={order._id}>
              <td>{order.fullName}</td>
              <td>{order.email}</td>
              <td>₦{order.totalAmount}</td>
              <td>{order.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default AdminDashboard;