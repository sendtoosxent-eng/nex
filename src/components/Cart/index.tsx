"use client";

import React from "react";
import Discount from "./Discount";
import OrderSummary from "./OrderSummary";
import { useAppSelector } from "@/redux/store";
import SingleItem from "./SingleItem";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const Cart = () => {
  const cartItems = useAppSelector(
    (state) => state.cartReducer.items
  );

  // USER STATE
  const [user, setUser] = React.useState<any>(null);

  // LOAD USER FROM LOCAL STORAGE
  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      {/* BREADCRUMB */}
      <section>
        <Breadcrumb title={"Cart"} pages={["Cart"]} />
      </section>

      {/* ================= CART WITH ITEMS ================= */}
      {cartItems.length > 0 ? (
        <section className="overflow-hidden py-20 bg-gray-2">
          <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">

            {/* WELCOME */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-black text-black">
                Welcome Back,
                <span className="text-sky-500">
                  {" "}
                  {user?.name || "Customer"}
                </span>
              </h1>

              <p className="text-gray-500 mt-2">
                Here are the products currently in your cart.
              </p>
            </div>

            {/* TOP BAR */}
            <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
              <h2 className="font-medium text-dark text-2xl">
                Your Cart
              </h2>

              <button className="text-sky-500 hover:text-sky-600 font-medium transition">
                Clear Shopping Cart
              </button>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-[20px] shadow-xl overflow-hidden border border-gray-100">
              <div className="w-full overflow-x-auto">
                <div className="min-w-[1170px]">

                  {/* HEADER */}
                  <div className="flex items-center py-5.5 px-7.5 bg-sky-50 border-b border-gray-100">
                    <div className="min-w-[400px]">
                      <p className="text-dark font-semibold">
                        Product
                      </p>
                    </div>

                    <div className="min-w-[180px]">
                      <p className="text-dark font-semibold">
                        Price
                      </p>
                    </div>

                    <div className="min-w-[275px]">
                      <p className="text-dark font-semibold">
                        Quantity
                      </p>
                    </div>

                    <div className="min-w-[200px]">
                      <p className="text-dark font-semibold">
                        Subtotal
                      </p>
                    </div>

                    <div className="min-w-[50px]">
                      <p className="text-dark text-right font-semibold">
                        Action
                      </p>
                    </div>
                  </div>

                  {/* CART ITEMS */}
                  {cartItems.map((item, key) => (
                    <SingleItem item={item} key={key} />
                  ))}
                </div>
              </div>
            </div>

            {/* SUMMARY */}
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11 mt-9">
              <Discount />
              <OrderSummary />
            </div>
          </div>
        </section>
      ) : (
        /* ================= EMPTY CART ================= */
        <section className="py-20 bg-gradient-to-b from-white to-sky-50 min-h-[70vh] flex items-center">
          <div className="max-w-[900px] mx-auto px-4 text-center">

            {/* WELCOME */}
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
                Welcome Back,
                <span className="text-sky-500">
                  {" "}
                  {user?.name || "Customer"}
                </span>
              </h1>

              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Your shopping cart is currently empty.
                Explore the latest premium gadgets and discover
                amazing deals at Nexcell Gadgets.
              </p>
            </div>

            {/* EMPTY CARD */}
            <div className="bg-white shadow-2xl rounded-[30px] p-10 border border-sky-100 relative overflow-hidden">

              {/* GLOW */}
              <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-sky-300/20 blur-[100px] rounded-full" />

              {/* ICON */}
              <div className="relative z-10 flex justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-sky-100 flex items-center justify-center shadow-inner">

                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="50"
                      fill="#E0F2FE"
                    />

                    <path
                      d="M33 35H38L43 60H68"
                      stroke="#0EA5E9"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <circle
                      cx="46"
                      cy="70"
                      r="4"
                      fill="#0EA5E9"
                    />

                    <circle
                      cx="63"
                      cy="70"
                      r="4"
                      fill="#0EA5E9"
                    />

                    <path
                      d="M41 43H69L64 57H44"
                      stroke="#0EA5E9"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* TEXT */}
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-black mb-4">
                  Your Cart Is Empty
                </h2>

                <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
                  Looks like you haven’t added anything yet.
                  Browse our collection of iPhones,
                  accessories, smart gadgets and premium
                  electronics.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap justify-center gap-5 mt-10">

                  <Link
                    href="/shop-with-sidebar"
                    className="bg-sky-500 hover:bg-sky-600 text-blue px-10 py-4 rounded-2xl font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-105"
                  >
                    Go Shopping
                  </Link>

                  <Link
                    href="/"
                    className="border border-sky-300 text-black hover:bg-sky-50 px-10 py-4 rounded-2xl font-semibold transition-all duration-300"
                  >
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;