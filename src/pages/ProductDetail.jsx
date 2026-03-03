import React, { useMemo, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../constants";
import CommonButton from "../components/common/CommonButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useMemo(() => {
    return products.find((item) => String(item.id) === id);
  }, [id]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.id === product?.id);

  // ✅ quantity now synced with cart
  const [quantity, setQuantity] = useState(cartItem?.quantity || 1);

  // ✅ update cart when quantity changes (AFTER add to cart)
  useEffect(() => {
    if (cartItem) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.label,
          price: Number(product.ActualPrice.replace(/[^0-9]/g, "")),
          src: product.src,
          quantity,
        })
      );
    }
  }, [quantity]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500">Product not found</p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 text-orange-500 underline"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.label,
        price: Number(product.ActualPrice.replace(/[^0-9]/g, "")),
        src: product.src,
        quantity,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    setQuantity(1); // reset quantity
  };

  const handleBuyNow = () => {
    navigate("/cart");
  };

  return (
    <div className="w-full min-h-screen bg-amber-50 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-6 md:p-10">

        {/* Back */}
        <p
          onClick={() => navigate("/shop")}
          className="text-sm text-gray-500 cursor-pointer hover:text-orange-500 mb-6"
        >
          ← Back to Shop
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={product.src}
              alt={product.label}
              className="w-full max-w-sm h-[450px] object-cover rounded-tl-full rounded-tr-full border"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold text-gray-800">
              {product.label}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-4">
              {product.sale && (
                <strike className="text-gray-400 text-lg">
                  {product.Price}
                </strike>
              )}
              <p className="text-2xl font-semibold text-orange-500">
                {product.ActualPrice}
              </p>
              {product.sale && (
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                  SALE
                </span>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description || "No description available."}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <p className="font-medium">Quantity:</p>

              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 text-lg font-semibold hover:bg-orange-100"
                >
                  −
                </button>

                <span className="px-5 min-w-[40px] text-center font-medium">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="px-4 py-2 text-lg font-semibold hover:bg-orange-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">

              {cartItem ? (
                <CommonButton
                  label="Remove from Cart"
                  onClick={handleRemoveFromCart}
                  styleButton="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full cursor-pointer"
                />
              ) : (
                <CommonButton
                  label="Add to Cart"
                  onClick={handleAddToCart}
                  styleButton="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full cursor-pointer"
                />
              )}

              {cartItem && (
                <CommonButton
                  label="Buy Now"
                  styleButton="border border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-full cursor-pointer"
                  onClick={handleBuyNow}
                />
              )}
            </div>

            {/* Info */}
            <div className="border-t pt-4 mt-6 text-sm text-gray-500">
              ✔ Free Shipping <br />
              ✔ Easy 7-day Return <br />
              ✔ Secure Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
