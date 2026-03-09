import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

  }, []);

  const removeItem = (index) => {

    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);

    setCartItems(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (

        <div className="space-y-6">

          {cartItems.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-6 border p-4 rounded"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover"
              />

              <div className="flex-1">

                <h2 className="text-xl">{item.name}</h2>

                <p className="text-red-600">
                  ₦{item.price}
                </p>

              </div>

              <button
                onClick={() => removeItem(index)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>

            </div>

          ))}

          <div className="mt-10 text-xl font-bold">

            Total: ₦{total}

          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-black text-white px-6 py-3 rounded"
          >
            Proceed To Checkout
          </button>

        </div>

      )}

    </div>

  );
}

export default Cart;