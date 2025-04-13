import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  incrementQuentity,
} from "../Redux/slices/CartSlice"; // Import removeItem action

const CartPage = () => {
  const CartItems = useSelector((store) => store.cart.items || []); // fallback if undefined
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index)); // Dispatch removeItem action with the index
  };

  const handIncrement = (index) => {
    dispatch(incrementQuentity(index));
  };
  const getTotal = () => {
    const total = CartItems.map(
      (item) => item.card.info.defaultPrice || item.card.info.price
    ).reduce((acc, val) => {
      return acc + val;
    }, 0);

    return total;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {CartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty 😕</p>
      ) : (
        <div className="space-y-4">
          {CartItems.map(({ card }, index) => {
            const item = card.info;
            return (
              <div
                key={item.id}
                className="flex gap-4 p-4 border rounded-lg shadow-sm bg-white"
              >
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />

                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="text-sm font-medium text-gray-800 mt-1">
                      ₹
                      {(item.price / 100 || item.defaultPrice / 100).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Control - Placeholder */}
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                    <span className="px-3">1</span>
                    <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className=" w-1/6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}

          {/* Total Section */}
          <div className="mt-6 p-4 border-t text-right">
            <p className="text-xl font-bold">
              Total: ₹{(getTotal() / 100).toFixed(2)}
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={handleClearCart}
                className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2  bg-green-600 text-white rounded hover:bg-green-700">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
