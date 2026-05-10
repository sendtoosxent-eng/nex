"use client";

import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { ArrowRight, ShoppingBag } from "lucide-react";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);

  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* ORDER SUMMARY CARD */}
      <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100">
        
        {/* HEADER */}
        <div className="border-b border-gray-100 py-6 px-5 sm:px-8 bg-gradient-to-r from-sky-500 to-blue-600">
          <h3 className="font-bold text-2xl text-white flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            Order Summary
          </h3>
        </div>

        <div className="pt-2 pb-8 px-5 sm:px-8">
          
          {/* TABLE HEADERS */}
          <div className="flex items-center justify-between py-5 border-b border-gray-200">
            <h4 className="font-semibold text-dark text-lg">
              Product
            </h4>

            <h4 className="font-semibold text-dark text-lg text-right">
              Subtotal
            </h4>
          </div>

          {/* PRODUCT ITEMS */}
          <div className="max-h-[320px] overflow-y-auto pr-2">
            {cartItems.map((item, key) => (
              <div
                key={key}
                className="flex items-center justify-between py-5 border-b border-gray-100"
              >
                <div className="pr-3">
                  <p className="text-dark font-medium line-clamp-2">
                    {item.title}
                  </p>

                  <span className="text-sm text-gray-500">
                    Qty: {item.quantity}
                  </span>
                </div>

                <div>
                  <p className="text-sky-600 font-bold text-right whitespace-nowrap">
                    UGX {(item.discountedPrice * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="flex items-center justify-between pt-6 pb-2">
            <p className="font-bold text-xl text-dark">
              Total
            </p>

            <p className="font-extrabold text-2xl text-sky-600">
              UGX {totalPrice.toLocaleString()}
            </p>
          </div>

          {/* CHECKOUT BUTTON */}
          <Link
            href="/checkout"
            className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
          >
            Proceed to Checkout

            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* CONTINUE SHOPPING */}
          <Link
            href="/shop-with-sidebar"
            className="w-full mt-4 inline-flex items-center justify-center font-medium text-sky-600 border border-sky-200 hover:bg-sky-50 py-3 px-6 rounded-2xl transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;