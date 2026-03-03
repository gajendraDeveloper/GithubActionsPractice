import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import CommonButton from "../components/common/CommonButton";

const Checkout = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    navigate("/orderSuccessfull");
  };

  return (
    <div className="min-h-screen bg-amber-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Checkout
        </h1>

        {/* Order Summary */}
        <div className="border rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-gray-700 mb-2"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span className="text-orange-500">₹{total}</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Payment Method
          </h2>

          <div className="space-y-4">
            {[
              { id: "card", label: "Credit / Debit Card" },
              { id: "upi", label: "UPI Payment" },
              { id: "cod", label: "Cash on Delivery" },
            ].map((method) => (
              <label
                key={method.id}
                className="flex items-center gap-4 cursor-pointer"
              >
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={() => setPaymentMethod(method.id)}
                />
                <span className="text-gray-700">
                  {method.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Place Order */}
        <div className="flex justify-end">
          <CommonButton
            label="Place Order"
            onClick={handlePlaceOrder}
            styleButton="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
