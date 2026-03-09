import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Admin Panel</h2>

        <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <Link style={{ color: "#fff" }} to="/admin">Dashboard</Link>
          <Link style={{ color: "#fff" }} to="/admin/products">Products</Link>
          <Link style={{ color: "#fff" }} to="/admin/add-product">Add Product</Link>
          <Link style={{ color: "#fff" }} to="/admin/orders">Orders</Link>
        </div>
      </div>

      {/* Page Content */}
      <div style={{ flex: 1, padding: "30px", background: "#f4f4f4" }}>
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;