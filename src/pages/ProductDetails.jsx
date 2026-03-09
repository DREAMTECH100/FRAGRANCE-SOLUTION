import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {

        const found = data.find(p => p._id === id);
        setProduct(found);

      });

  }, [id]);

  if (!product) return <div className="p-10">Loading...</div>;


  const handleAddToCart = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    navigate("/cart");

  };


  return (

    <div className="p-10 grid md:grid-cols-2 gap-12">

      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />

      <div>

        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="text-2xl text-red-600 mt-4">
          ₦{product.price}
        </p>

        <p className="mt-6 text-gray-600">
          {product.description}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded"
        >
          Add To Cart
        </button>

      </div>

    </div>

  );
}

export default ProductDetails;