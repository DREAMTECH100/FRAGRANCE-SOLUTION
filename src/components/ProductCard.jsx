import { Link } from "react-router-dom"

function ProductCard({ product }) {

  return (
    <div className="bg-white border hover:shadow-lg transition p-4">

      <Link to={`/product/${product.id}`}>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[180px] object-cover"
        />

        <h3 className="mt-4 text-lg tracking-wide">
          {product.name}
        </h3>

        <p className="text-red-600 mt-1 font-medium">
          ₦{product.price}
        </p>

      </Link>

      <button
        className="mt-4 w-full bg-red-600 text-white py-2 tracking-widest hover:bg-red-700 transition"
      >
        ADD TO CART
      </button>

    </div>
  )
}

export default ProductCard