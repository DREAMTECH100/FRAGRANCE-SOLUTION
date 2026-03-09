import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""
  });

  const [uploading, setUploading] = useState(false);

  // Handles text input changes
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handles local file uploads
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // Replace with your Cloudinary preset

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", // Replace with your Cloudinary name
        { method: "POST", body: formData }
      );

      const data = await res.json();

      // Update product image with uploaded file URL
      setProduct({ ...product, image: data.secure_url });
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Image upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      alert("Please provide an image URL or upload a file.");
      return;
    }

    try {
      await fetch("http://localhost:5000/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });

      alert("Product Added!");
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
        stock: ""
      });
    } catch (err) {
      console.error(err);
      alert("Failed to add product.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />
        <br /><br />

        {/* IMAGE URL INPUT */}
        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={product.image}
          onChange={handleChange}
        />
        <br /><br />

        {/* LOCAL FILE UPLOAD */}
        <input
          type="file"
          name="imageFile"
          onChange={handleFileChange}
        />
        {uploading && <p>Uploading image...</p>}
        <br /><br />

        <input
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default AddProduct;