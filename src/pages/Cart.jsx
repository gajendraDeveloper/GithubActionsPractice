import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { increase, decrease, removeFromCart } from "../redux/slices/cartSlice";
import CommonButton from "../components/common/CommonButton";

const Cart = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <CommonButton
          label="Continue Shopping"
          onClick={() => navigate("/shop")}
          styleButton="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Shopping Cart ({amount})
        </h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-6"
            >
              <div className="flex items-center gap-6">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-28 h-36 object-cover rounded-xl border"
                />

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h3>
               <p className="text-orange-500 font-medium">
  ₹{item.price}
</p>


                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-sm text-red-500 mt-2 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() => dispatch(decrease(item.id))}
                  className="px-4 py-2 hover:bg-orange-100"
                >
                  −
                </button>
                <span className="px-6 font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(increase(item.id))}
                  className="px-4 py-2 hover:bg-orange-100"
                >
                  +
                </button>
              </div>

              <p className="font-semibold text-gray-800">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xl font-semibold text-gray-800">
            Total: <span className="text-orange-500">₹{total}</span>
          </p>

          <CommonButton
            label="Proceed to Checkout"
            onClick={() => navigate("/checkout")}
            styleButton="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
