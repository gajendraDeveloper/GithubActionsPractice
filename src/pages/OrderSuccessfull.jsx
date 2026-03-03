import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import CommonButton from "../components/common/CommonButton";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessful() {
    const navigate = useNavigate();
    const handleShopping = () => {
        navigate("/shop");
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 to-green-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-4"
          >
            <CheckCircle className="h-20 w-20 text-emerald-500" />
          </motion.div>

          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Order Placed Successfully 🎉
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase! Your order has been confirmed and is
            being processed.
          </p>

          <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-medium text-gray-800">#ORD-123456</p>

            <div className="mt-3 flex justify-between text-sm">
              <span className="text-gray-500">Estimated Delivery</span>
              <span className="font-medium text-gray-800">
                3–5 Business Days
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <CommonButton
              label="Continue Shopping"
              onClick={handleShopping}
              styleContainer="w-full "
              styleButton="border w-full border-emerald-500 text-emerald-500 py-3 rounded-xl text-lg hover:bg-emerald-50 transition"
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          A confirmation email has been sent to your registered email address.
        </p>
      </motion.div>
    </div>
  );
}
