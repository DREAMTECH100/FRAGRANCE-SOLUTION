import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fragrances() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("Products:", data);
        setProducts(data);
      });

  }, []);


  
  return (

  <div>

    {/* PAGE HERO */}
    <div className="bg-gray-100 py-24 text-center">
      <h1 className="text-4xl tracking-[0.4em] font-light">
        FRAGRANCES
      </h1>
      <p className="mt-4 text-gray-500">
        Discover scents crafted for elegance and presence
      </p>
    </div>


    <div className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {products.map(product => (

          <Link key={product._id} to={`/product/${product._id}`}>

           <div className="border p-4 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover hover:scale-105 transition duration-300"
              />

              <h2 className="text-xl mt-3">{product.name}</h2>

              <p className="text-gray-500">₦{product.price}</p>

            </div>

          </Link>

        ))}

      </div>

    </div>

  </div>

);
}

export default Fragrances;